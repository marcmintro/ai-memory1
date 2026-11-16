import {fileURLToPath} from 'node:url';
const ROOT=fileURLToPath(new URL('.',import.meta.url));
const C={ink:'#0b0d10',chalk:'#e9edf1',muted:'#8a939d',blue:'#4f7396',light:'#7d9fc0'};
const note='Grundlagen: kurze-rippe/context/briefing-geschaeftsfuehrung-2026-11-13.md, context/entscheidungen.md, arbeit/website-entwurf/blau.html, arbeit/content-saeulen.md, arbeit/angebot-text.md. Fotos und Logo aus dem bestehenden Website-Entwurf, ursprünglich kurze-rippe.de. Entwurf zur Besprechung am 16.11.2026.';
function text(s,t,x,y,w,h,size=28,color=C.chalk,font='Arial',bold=false){
 const q=s.shapes.add({name:t.slice(0,45),geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=t;q.text.style={fontSize:size,typeface:font,color,bold,insets:0,autoFit:'none',wrap:'square'};return q;
}
function head(s,t,x,y,w,h,size=86,color=C.chalk){return text(s,t,x,y,w,h,size,color,'Impact')}
function image(s,file,x,y,w,h,alt,fit='cover'){return s.images.add({path:ROOT+file,position:{left:x,top:y,width:w,height:h},fit,alt})}
function slide(p,bg=C.ink){const s=p.slides.add({width:1280,height:720});s.background.fill=bg;s.speakerNotes.text=note;return s}
function page(s,n,color=C.muted){text(s,String(n).padStart(2,'0'),1204,672,40,25,16,color)}
export async function build(p){
 p.slides.keep([]);
 // 1. Cover
 let s=slide(p);image(s,'../website-entwurf/img/hero.webp',560,0,720,720,'Boxer in der Ringecke der Kurzen Rippe');
 text(s,'WEBSITE UND SOCIAL MEDIA',68,65,480,30,18,C.light,'Arial',true);
 head(s,'KURZE',68,170,500,180,158);head(s,'RIPPE',68,326,500,180,158);
 text(s,'Der neue Auftritt',72,539,450,44,31,C.light);text(s,'Entwurf v1, 16.11.2026',72,650,450,30,18,C.muted);
 // 2. Brand
 s=slide(p);image(s,'../website-entwurf/img/hands.webp',620,0,660,720,'Bandagierte Hände vor dem Training');
 head(s,'KULT',68,74,520,110,98);head(s,'BOX CLUB',68,173,550,110,98);head(s,'AUS KÖLN',68,272,550,120,98,C.light);
 text(s,'Echtes Boxen und ein Club,\nin dem alle ihren Einstieg finden.',72,474,505,100,29);
 text(s,'Old School im Gym.\nEin klarer Auftritt nach außen.',72,605,500,66,22,C.muted);page(s,2);
 // 3. Website
 s=slide(p);head(s,'DIE\nWEBSITE',64,64,400,225,92);
 text(s,'Training finden.\nDas Team kennenlernen.\nProbetraining starten.',68,345,335,150,27);
 text(s,'Ein Auftritt für beide Standorte,\nauch auf dem Smartphone.',68,575,340,75,22,C.light);
 image(s,'assets/website-desktop.png',440,115,792,550,'Desktopansicht des blauen Website-Entwurfs','contain');page(s,3);
 s.speakerNotes.text+=' Die Website-Abbildung zeigt den vorhandenen lokalen HTML-Entwurf. Ein Veröffentlichungstermin steht noch nicht fest.';
 // 4. Pillars
 s=slide(p,C.blue);head(s,'FÜNF\nTHEMEN\nFÜR DEN\nFEED',64,74,420,510,94);
 const pillars=[['01','DIE GESICHTER','Trainer, Mitglieder und die Familie'],['02','ECHTES BOXEN','Technik und Alltag im Training'],['03','DEIN EINSTIEG','Probetraining und Anfängergruppen'],['04','KULT & OLD SCHOOL','Clubgeschichte, Gym und Merch'],['05','RING FREI','Wettkämpfe, Kids und Respekt']];
 pillars.forEach(([n,a,b],i)=>{const y=75+i*119;text(s,n,516,y+8,58,46,29,C.ink,'Arial',true);head(s,a,594,y,620,55,43);text(s,b,596,y+61,620,44,23)});page(s,4,C.chalk);
 // 5. Concrete series
 s=slide(p);image(s,'../website-entwurf/img/t_alex.webp',840,0,440,720,'Vorhandenes Trainerporträt von Alex');
 head(s,'GESICHTER\nAUS DEM CLUB',64,64,750,215,82);
 [['ECKE ROT','Trainer stellen sich selbst vor.'],['TECHNIK-TIPP','Ein Fehler. Eine Korrektur. Ein kurzer Clip.'],['ERSTE RUNDE','Probetraining und Einstieg einfach erklärt.']].forEach(([a,b],i)=>{let y=325+i*112;head(s,a,68,y,715,51,43,C.light);text(s,b,70,y+55,710,44,24)});page(s,5);
 s.speakerNotes.text+=' Geplante Serien, noch keine veröffentlichten Beiträge. Ecke Rot bleibt der etablierte Serienname auch in der blauen Gestaltungsvariante. Keine erfundenen Trainerzitate.';
 // 6. Teaser
 s=slide(p);head(s,'DER\nLAUNCH',64,64,400,220,94);
 text(s,'Ein kurzer Teaser kündigt\nden neuen Webauftritt an.',68,342,385,95,27);
 text(s,'15 Sekunden im Hochformat.\nClubfotos, bewegte Schrift\nund ein erster Website-Blick.',68,487,390,120,23,C.light);
 for(const [i,file,title,subtitle] of [[0,'02-club.png','DER CLUB','00–07 Sekunden'],[1,'04-web.png','DER NEUE LOOK','07–11 Sekunden'],[2,'05-end.png','BALD ONLINE','11–15 Sekunden']]){let x=506+i*239;image(s,file,x,94,199,354,title,'contain');head(s,title,x,479,220,64,28);text(s,subtitle,x,545,220,36,18,C.muted)}
 text(s,'Die finale Veröffentlichung folgt nach Freigabe und festem Launch-Termin.',508,620,696,50,20,C.muted);page(s,6);
 // 7. Plan
 s=slide(p,C.chalk);head(s,'DER START',64,57,1100,120,94,C.ink);text(s,'Vorgeschlagener Ablauf',68,179,1080,40,23,C.blue);
 const phases=[['DEZEMBER 2026','Club und Trainer vorstellen','Ein Post pro Woche. Vorhandenes Material sichten und nutzen.'],['JANUAR / FEBRUAR 2027','Den Einstieg zeigen','Probetraining erklären. Website nach gemeinsamer Freigabe starten.'],['AB MÄRZ 2027','Die Formate weiterentwickeln','Frequenz und zusätzliche Drehs nach den ersten Erfahrungen abstimmen.']];
 phases.forEach(([a,b,c],i)=>{let y=266+i*136;head(s,a,68,y,492,60,i===1?35:39,C.blue);text(s,b,582,y,630,43,28,C.ink,'Arial',true);text(s,c,584,y+54,620,70,23,C.ink)});page(s,7,C.blue);
 s.speakerNotes.text+=' Grundlage: Marcs Vorgabe vom 13.11.2026, mit einem Beitrag pro Woche zu starten. Spätere Frequenzen und Frühlingsbudget sind Vorschläge. Es wird keine saisonale Nachfrage als nachgewiesene Tatsache behauptet.';
 // 8. Offer
 s=slide(p);head(s,'DIE ZUSAMMENARBEIT',64,58,1150,110,73);
 head(s,'1.890 €',68,215,530,120,100,C.light);text(s,'Start-Paket, einmalig',72,347,500,40,26);
 text(s,'Website und Konzept\nVorlagen für die Formate\nSichtung des vorhandenen Materials\nProfile und Präsentation',72,420,520,180,25);
 head(s,'650 €',688,215,500,120,100,C.light);text(s,'Betreuung pro Monat',692,347,490,40,26);
 text(s,'Ein Post pro Woche\nSchnitt, Gestaltung und Captions\nPlanung und Veröffentlichung nach Freigabe\nBasis ist das vorhandene Material',692,420,520,180,25);
 text(s,'Mediatage separat nach Absprache. Domain und Hosting über den Club.\nKalkulationsstand: Umsatzsteuerangabe vor dem finalen Angebot klären.',72,628,1095,61,18,C.muted);page(s,8);
 s.speakerNotes.text+=' Preise 1.890 € und 650 €/Monat wurden von Marc am 13.11. bestätigt. Die Umsatzsteuerbehandlung ist laut Übergabe noch offen. Der optionale Ausbau für 1.290 €/Monat und die spätere Übergabe für 450 €/Monat sind nicht als freigegebene Preise aufgenommen. Keine Budget- oder Ertragsgarantie.';
 // 9. Closing
 s=slide(p);image(s,'../website-entwurf/img/ropes.webp',0,0,640,720,'Ringseile im Boxclub');
 image(s,'../website-entwurf/img/logo.png',704,54,122,89,'Original-Logo des Boxclubs','contain');
 head(s,'DIE NÄCHSTE\nRUNDE',700,194,540,207,78,C.light);
 text(s,'Website und Bildwelt abstimmen\nMaterial gemeinsam auswählen\nStarttermin festlegen',704,464,525,147,26);
 text(s,'Kurze Rippe',704,651,500,30,20,C.muted);page(s,9);
 return {slides:p.slides.items.length};
}
