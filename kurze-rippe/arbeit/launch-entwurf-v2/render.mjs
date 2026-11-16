import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';
const root=fileURLToPath(new URL('.',import.meta.url));
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:810},deviceScaleFactor:4/3});
await page.goto('file://'+root+'website-film.html');
await page.evaluate(()=>window.prepareFilm());
if(process.argv.includes('--frames')){
 for(let i=0;i<800;i++){
  await page.evaluate(t=>window.seekFilm(t),i/25);
  await page.screenshot({path:root+'frames/'+String(i).padStart(4,'0')+'.png'});
  if(i%100===0)console.log('frame '+i+'/800');
 }
}else{
 for(const [name,t] of [['01-intro',1.5],['02-hero',5.6],['03-kurse',9.2],['04-probe',13],['05-plan',17.8],['06-trainer',22],['07-gym',26],['08-kontakt',30]]){
  await page.evaluate(t=>window.seekFilm(t),t);
  await page.screenshot({path:root+name+'.png'});
 }
 console.log(await page.evaluate(()=>({width:innerWidth,height:innerHeight,sections:[...document.querySelectorAll('main section[id]')].map(e=>({id:e.id,y:e.getBoundingClientRect().top+scrollY})),triggers:ScrollTrigger.getAll().slice(0,3).map(s=>({id:s.trigger?.id,start:s.start,end:s.end}))})));
}
await browser.close();
