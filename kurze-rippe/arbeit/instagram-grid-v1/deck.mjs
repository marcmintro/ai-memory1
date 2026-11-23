import {fileURLToPath} from 'node:url';
import {build as buildV3} from '../praesentation-v3/deck.mjs';
const C={ink:'#0b0d10',chalk:'#e9edf1',muted:'#8a939d',blue:'#4f7396',light:'#7d9fc0'};
function txt(s,t,x,y,w,h,size=24,color=C.chalk,font='Arial'){
 const q=s.shapes.add({geometry:'textbox',name:t.slice(0,70),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=t;q.text.style={fontSize:size,typeface:font,color,insets:0,wrap:'square',autoFit:'none'};return q;
}
export async function revise(p){
 if(p.slides.items.length!==14)throw new Error('Erwartet wird die bestätigte Präsentation v3 mit 14 Folien.');
 const {slide:s,index}=p.slides.insert({after:4,width:1280,height:720});s.background.fill=C.ink;
 const imagePath=fileURLToPath(new URL('./instagram-grid.jpg',import.meta.url));
 s.images.add({path:imagePath,alt:'Instagram-Grid Entwurf: sechs Clubfotos mit rotem Ringmotiv und warmer Umkleide, drei Typografie-Beiträge in Blau, Schwarz und Weiß',fit:'contain',position:{left:64,top:52,width:452,height:602}});
 txt(s,'DAS\nINSTAGRAM-GRID',560,52,655,170,72,C.chalk,'Impact');
 txt(s,'TYPOGRAFIE',564,259,650,46,31,C.light,'Impact');
 txt(s,'Big Shoulders Stencil Display für Headlines.\nInter Tight für Seriennamen und kurze Infos.',564,309,650,78,24);
 txt(s,'LAYOUT',564,420,650,44,31,C.light,'Impact');
 txt(s,'Sechs Fotomotive, drei Typo-Posts.\nBlau als Basis, Rot und warme Clubdetails im Bild.\nWiederkehrende Seriennamen für die Säulen.',564,470,650,112,24);
 txt(s,'Gestaltungsentwurf mit Archivbildern. Aktuelle Porträts\nund Aussagen entstehen gezielt für die neuen Beiträge.',564,613,650,58,19,C.muted);
 s.speakerNotes.text='Gestaltungsvorschlag vom 23.11.2026 nach Marcs Auftrag, Bildauswahl anschließend auf Marcs Wunsch überarbeitet. Originalbilder aus /Volumes/G-DRIVE PRO/MINTRO/WORK/KR/KurzeRippe__Lightroom _/: KR-110.jpg, KR-179.jpg, KR-135.jpg, KR-256.jpg, KR-6.jpg und KR-36.jpg. Deckung hoch nutzt das rote Ringmotiv KR-135, Rhythmus finden das blaue Trainingsbild KR-256, Boxen in Köln die Umkleide KR-6. EXIF der Bildserie: März/April 2020. Keine Zuordnung der Abgebildeten zu heutigen Trainerrollen oder erfundene Zitate. 3×3-Entwurf, einzelne Posts im vorgeschlagenen Format 1080×1440. Big Shoulders Stencil Display und Big Shoulders Display für Headlines, Inter Tight für Informationen, aus dem blauen Webentwurf übernommen. Logo aus dem bestehenden Website-Entwurf. Das Raster zeigt den Markenlook und Beispielthemen, keinen verbindlichen Veröffentlichungsplan. Die monatliche Betreuung bleibt bei 850 Euro ab Januar 2027, fehlende Aufnahmen und separat angebotener Mediatag wie in den folgenden Produktionsfolien. Keine Veröffentlichungsfreigabe.';
 for(let i=1;i<p.slides.items.length;i++){
  let page;for(const sh of p.slides.getItem(i).shapes.items)if(sh.position.left>=1190&&sh.position.top>=660&&/^\d{2}$/.test(sh.text.toString()))page=sh;
  if(page)page.text=String(i+1).padStart(2,'0');else txt(p.slides.getItem(i),String(i+1).padStart(2,'0'),1204,680,40,25,16,C.muted);
 }
 return {slides:p.slides.items.length,newSlide:index+1};
}
export async function build(p){await buildV3(p);return revise(p)}
export async function refreshGrid(p){
 if(p.slides.items.length!==15)throw new Error('Erwartet wird die Präsentation mit 15 Folien.');
 const s=p.slides.getItem(5);
 if(!s.shapes.items.some(x=>x.text.toString()==='DAS\nINSTAGRAM-GRID'))throw new Error('Grid-Folie nicht an erwarteter Stelle.');
 const inspected=await p.inspect({select:'$.slides[5].elements[*]',include:['id']});
 const images=inspected.records.filter(x=>x.id.startsWith('im/'));
 if(images.length!==1)throw new Error('Grid-Bild ist nicht eindeutig.');
 p.delete(images.map(x=>x.id));
 s.images.add({path:fileURLToPath(new URL('./instagram-grid.jpg',import.meta.url)),alt:'Instagram-Grid mit rotem Ringfoto KR-135, blauem Trainingsbild KR-256 und Umkleide KR-6',fit:'contain',position:{left:64,top:52,width:452,height:602}});
 const layout=s.shapes.items.find(x=>x.text.toString().startsWith('Sechs Fotomotive, drei Typo-Posts.'));
 if(!layout)throw new Error('Layout-Text nicht gefunden.');
 layout.text='Sechs Fotomotive, drei Typo-Posts.\nBlau als Basis, Rot und warme Clubdetails im Bild.\nWiederkehrende Seriennamen für die Säulen.';
 s.speakerNotes.text=String(s.speakerNotes.text).replace('KR-146.jpg, KR-231.jpg, KR-1.jpg','KR-135.jpg, KR-256.jpg, KR-6.jpg')+' Bildauswahl auf Marcs Wunsch überarbeitet: Deckung hoch mit rotem Ringfoto KR-135, Rhythmus finden mit KR-256, Boxen in Köln mit der Umkleide KR-6. Die Originalfarbgebung bleibt erhalten.';
 return {slides:p.slides.items.length,updatedSlide:6};
}
