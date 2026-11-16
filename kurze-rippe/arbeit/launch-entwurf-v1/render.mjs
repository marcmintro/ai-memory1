import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
const root=path.dirname(new URL(import.meta.url).pathname);
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
await page.goto('file://'+root+'/website.html');
await page.waitForFunction(()=>document.fonts.status==='loaded');
await page.evaluate(()=>{
 document.documentElement.classList.remove('js');
 document.querySelectorAll('.wordmark .wm2').forEach(e=>e.remove());
 document.querySelectorAll('.reveal').forEach(e=>{e.style.opacity='1';e.style.transform='none'});
});
await page.screenshot({path:root+'/assets/website-desktop.png'});
await page.setViewportSize({width:720,height:1280});
await page.screenshot({path:root+'/assets/website-mobile.png'});
await page.setViewportSize({width:1080,height:1920});
await page.goto('file://'+root+'/teaser.html?render');
await page.waitForFunction(()=>document.fonts.status==='loaded');
await page.locator('img').evaluateAll(async images=>Promise.all(images.map(i=>i.decode())));
for(const [name,t] of [['01-title',1],['02-club',4.2],['03-boxen',6.4],['04-web',9.5],['05-end',13.8]]){
 await page.evaluate(t=>window.seek(t),t);await page.screenshot({path:root+'/'+name+'.png'});
}
if(process.argv.includes('--frames')){
 for(let i=0;i<450;i++){
  await page.evaluate(t=>window.seek(t),i/30);
  await page.screenshot({path:root+'/frames/'+String(i).padStart(4,'0')+'.png'});
  if(i%90===0)console.log(`frame ${i}/450`);
 }
}
await browser.close();
