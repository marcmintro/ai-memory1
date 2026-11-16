import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
function txt(s,t,x,y,w,h,size,color='#e9edf1',font='Arial'){
 const q=s.shapes.add({geometry:'textbox',name:t,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=t;q.text.style={fontSize:size,typeface:font,color,insets:0,autoFit:'none',wrap:'square'};return q;
}
export async function updateFilmSlide(p){
 const old=await p.inspect({select:'$.slides[6].elements[*]',include:['id']});
 p.delete(old.records.map(x=>x.id));const s=p.slides.getItem(6);
 txt(s,'DIE WEBSITE\nALS FILM',64,64,400,220,79,'#e9edf1','Impact');
 txt(s,'32 Sekunden im Querformat.\nFür die Vorstellung bei der\nGeschäftsführung.',68,347,355,150,26);
 txt(s,'16:9, Full HD',68,582,350,40,24,'#7d9fc0');
 s.images.add({path:root+'03-kurse.png',alt:'Kursübersicht im blauen Website-Entwurf',position:{left:472,top:112,width:744,height:418.5},fit:'contain'});
 txt(s,'DER WEBENTWURF IN BEWEGUNG',474,563,728,48,30,'#7d9fc0','Impact');
 txt(s,'Intro, Kurse, Probetraining, Kursplan, Trainer und Standorte.',474,621,728,55,22,'#8a939d');
 txt(s,'07',1204,672,40,25,16,'#8a939d');
 s.speakerNotes.text='Der Begleitfilm zeigt den vorhandenen blauen Website-Entwurf im Format 16:9 mit Intro, Bild-Reveal, Kursen, Probetraining, Standortwechsel im Kursplan, Traineransicht, Gym-Vermietung und Kontakt. 32 Sekunden zur Vorstellung bei der Geschäftsführung. Quelle: arbeit/website-entwurf/blau.html und Briefing vom 13.11.2026. Kein bestätigter Veröffentlichungstermin.';
 for(const sh of p.slides.getItem(0).shapes.items)if(sh.text.toString()==='Entwurf v1, 16.11.2026')sh.text='Entwurf v2, 16.11.2026';
}
