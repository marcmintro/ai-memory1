import Foundation
import AVFoundation
import CoreGraphics
import ImageIO
import CoreVideo

let root=URL(fileURLWithPath:CommandLine.arguments[1])
let output=URL(fileURLWithPath:CommandLine.arguments[2])
let silent=root.appendingPathComponent("silent.mp4")
let width=1920,height=1080,fps:Int32=25,count=800
try? FileManager.default.removeItem(at:silent)
let writer=try AVAssetWriter(outputURL:silent,fileType:.mp4)
let input=AVAssetWriterInput(mediaType:.video,outputSettings:[AVVideoCodecKey:AVVideoCodecType.h264,AVVideoWidthKey:width,AVVideoHeightKey:height,AVVideoCompressionPropertiesKey:[AVVideoAverageBitRateKey:2000000,AVVideoProfileLevelKey:AVVideoProfileLevelH264HighAutoLevel,AVVideoMaxKeyFrameIntervalKey:50]])
input.expectsMediaDataInRealTime=false
let adaptor=AVAssetWriterInputPixelBufferAdaptor(assetWriterInput:input,sourcePixelBufferAttributes:[kCVPixelBufferPixelFormatTypeKey as String:kCVPixelFormatType_32ARGB,kCVPixelBufferWidthKey as String:width,kCVPixelBufferHeightKey as String:height,kCVPixelBufferCGImageCompatibilityKey as String:true,kCVPixelBufferCGBitmapContextCompatibilityKey as String:true])
writer.add(input)
guard writer.startWriting() else{throw writer.error ?? NSError(domain:"start",code:1)}
writer.startSession(atSourceTime:.zero)
guard adaptor.pixelBufferPool != nil else{throw writer.error ?? NSError(domain:"pixel-buffer-pool",code:1)}
for i in 0..<count{
 while !input.isReadyForMoreMediaData {Thread.sleep(forTimeInterval:0.005)}
 try autoreleasepool{
  let file=root.appendingPathComponent(String(format:"frames/%04d.png",i))
  guard let source=CGImageSourceCreateWithURL(file as CFURL,nil),let image=CGImageSourceCreateImageAtIndex(source,0,nil) else{throw NSError(domain:"image",code:i)}
  var pixel:CVPixelBuffer?;CVPixelBufferPoolCreatePixelBuffer(nil,adaptor.pixelBufferPool!,&pixel)
  let p=pixel!;CVPixelBufferLockBaseAddress(p,[])
  let context=CGContext(data:CVPixelBufferGetBaseAddress(p),width:width,height:height,bitsPerComponent:8,bytesPerRow:CVPixelBufferGetBytesPerRow(p),space:CGColorSpaceCreateDeviceRGB(),bitmapInfo:CGImageAlphaInfo.noneSkipFirst.rawValue)!
  context.draw(image,in:CGRect(x:0,y:0,width:width,height:height))
  CVPixelBufferUnlockBaseAddress(p,[])
  if !adaptor.append(p,withPresentationTime:CMTime(value:Int64(i),timescale:fps)){throw writer.error ?? NSError(domain:"append",code:i)}
 }
 if i%90==0{print("encoded \(i)/\(count)")}
}
input.markAsFinished();let done=DispatchSemaphore(value:0)
writer.finishWriting{done.signal()};done.wait()
if let error=writer.error{throw error}
let audioURL=root.appendingPathComponent("audio.m4a")
try? FileManager.default.removeItem(at:audioURL)
let sourceAudio=AVURLAsset(url:root.appendingPathComponent("sound.wav"))
let audioExport=AVAssetExportSession(asset:sourceAudio,presetName:AVAssetExportPresetAppleM4A)!
audioExport.outputURL=audioURL;audioExport.outputFileType = .m4a
let audioDone=DispatchSemaphore(value:0);audioExport.exportAsynchronously{audioDone.signal()};audioDone.wait()
if let error=audioExport.error{throw error}
let composition=AVMutableComposition()
let video=AVURLAsset(url:silent), audio=AVURLAsset(url:audioURL)
let range=CMTimeRange(start:.zero,duration:CMTime(value:32,timescale:1))
let vTrack=composition.addMutableTrack(withMediaType:.video,preferredTrackID:kCMPersistentTrackID_Invalid)!
try vTrack.insertTimeRange(range,of:video.tracks(withMediaType:.video)[0],at:.zero)
let aTrack=composition.addMutableTrack(withMediaType:.audio,preferredTrackID:kCMPersistentTrackID_Invalid)!
try aTrack.insertTimeRange(range,of:audio.tracks(withMediaType:.audio)[0],at:.zero)
try? FileManager.default.removeItem(at:output)
let exporter=AVAssetExportSession(asset:composition,presetName:AVAssetExportPresetPassthrough)!
exporter.outputURL=output;exporter.outputFileType = .mp4;exporter.shouldOptimizeForNetworkUse=true
let mux=DispatchSemaphore(value:0);exporter.exportAsynchronously{mux.signal()};mux.wait()
if let error=exporter.error{throw error}
print("saved \(output.path)")
