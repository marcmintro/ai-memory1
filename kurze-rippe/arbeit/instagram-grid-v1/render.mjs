import {chromium} from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
await fs.mkdir(root+'posts',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1632,height:2172},deviceScaleFactor:2});
await page.goto(new URL('grid.html',import.meta.url).href);
await page.evaluate(()=>document.fonts.ready);
await page.locator('img').evaluateAll(async imgs=>Promise.all(imgs.map(im=>im.decode())));
await sharp(await page.locator('#grid').screenshot()).resize({width:1632}).jpeg({quality:94}).toFile(root+'instagram-grid.jpg');
for(const post of await page.locator('.post').all()){
 const id=await post.getAttribute('data-id');
 await sharp(await post.screenshot()).jpeg({quality:95}).toFile(root+'posts/'+id+'.jpg');
}
await browser.close();
console.log('Gesamtansicht und neun Einzelmotive gerendert.');
