const ink='#0b0d10',chalk='#e9edf1',blue='#4f7396',light='#7d9fc0';
const topics=[
 ['DIE\nGESICHTER',['Trainer\nvorstellen','Mitglieder-\nstimmen','Der passende\nTrainer']],
 ['ECHTES\nBOXEN',['Technik-Tipps','Training\nim Alltag','Workouts zum\nMitmachen']],
 ['DEIN\nEINSTIEG',['Probetraining','Anfängerkurse','Kids und\nAusrüstung']],
 ['KULT &\nOLD SCHOOL',['Familien-\ngeschichte','Gym mieten','Merch']],
 ['RING\nFREI',['Wettkämpfe\nund Titel','Kampfabende','Kids und\nRespekt']],
];
function txt(s,t,x,y,w,h,size,color=chalk,font='Arial',align='left'){
 const a=s.shapes.add({geometry:'textbox',name:t,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 a.text=t;a.text.style={typeface:font,fontSize:size,color,insets:0,wrap:'square',autoFit:'none',alignment:align};return a;
}
function rect(s,name,x,y,w,h,color){s.shapes.add({geometry:'rect',name,position:{left:x,top:y,width:w,height:h},fill:color,line:{fill:'none',width:0}})}
export function addPillars(p){
 const {slide:s}=p.slides.insert({after:3,width:1280,height:720});s.background.fill=ink;
 txt(s,'DIE SÄULEN IM ALLTAG',64,49,1152,95,71,chalk,'Impact');
 txt(s,'Unterthemen für die wiederkehrenden Formate',68,158,1120,38,25,light);
 topics.forEach(([title,subs],i)=>{
  const x=64+i*232;
  rect(s,'Säulenschaft '+i,x+16,337,176,276,'#1a2633');
  rect(s,'Säulenkopf '+i,x,228,208,109,blue);
  rect(s,'Säulenfuß '+i,x,613,208,17,blue);
  txt(s,title,x+9,243,190,87,35,chalk,'Impact','center');
  subs.forEach((label,j)=>txt(s,label,x+24,365+j*81,160,67,24,chalk,'Arial','center'));
 });
 txt(s,'05',1204,672,40,25,16,'#8a939d');
 s.speakerNotes.text='Die fünf Säulen und Unterthemen stammen aus arbeit/content-saeulen.md, Entwurf v2 vom 13.11.2026. Marc wünscht am 16.11. nach der Übersicht ausdrücklich eine Darstellung als Säulen mit Unterthemen. Die Säulen sind native, bearbeitbare Formen und Texte.';
 for(let i=5;i<p.slides.items.length;i++){
  for(const sh of p.slides.getItem(i).shapes.items){
   if(sh.position.left>=1190&&sh.position.top>=660&&/^\d{2}$/.test(sh.text.toString()))sh.text=String(i+1).padStart(2,'0');
  }
 }
 return s;
}
