import {build as buildV2} from '../launch-entwurf-v2/deck.mjs';

const C={ink:'#0b0d10',chalk:'#e9edf1',muted:'#8a939d',blue:'#4f7396',light:'#7d9fc0'};
const sources='Quellen: arbeit/content-saeulen.md und GF-Briefing vom 13.11.2026. Marcs Änderungen im Codex-Chat vom 23.11.2026: Produktion fehlenden Materials erklären, Betreuungshonorar 850 Euro pro Monat, Start und Website-Relaunch im Januar 2027, Ankündigung nach Weihnachten 2026, Filmfolie entfernen. Produktionswege sind ein Vorschlag zur Abstimmung. Neue Drehtage bleiben separat kalkuliert.';

export const pillars=[
 {title:'DIE GESICHTER',goal:'Trainer und Mitglieder kennenlernen, damit der erste Besuch leichter fällt.',rows:[
  ['TRAINER\nVORSTELLEN','Wir geben einen kurzen Fragenleitfaden vor. Jeder Trainer spricht die Antworten neu ins Handy; dazu entstehen ein Porträtfoto und kurze Trainingsbilder.','Porträt-Reel\nund Trainerkarte'],
  ['MITGLIEDER-\nSTIMMEN','Der Club nimmt nach dem Training ein kurzes Interview auf: Warum Boxen, warum Kurze Rippe? Wir schneiden eine echte Aussage mit Foto oder Clip.','Mitglieder-Reel\noder Foto mit Zitat'],
  ['DER PASSENDE\nTRAINER','Jeder Trainer benennt seinen Schwerpunkt. Wir prüfen die Angaben mit dem Club und verbinden Porträt, Trainingsstil und Kursinformation.','Karussell:\nWelcher Trainer\npasst zu dir?']
 ]},
 {title:'ECHTES BOXEN',goal:'Boxkompetenz sichtbar machen und den Trainingsalltag verständlich zeigen.',rows:[
  ['TECHNIK-\nTIPPS','Ein Trainer zeigt einen typischen Fehler und die Korrektur aus zwei Blickwinkeln. In einem Aufnahmeblock entstehen mehrere Tipps für einzelne Clips.','Reels mit\nje einem Tipp'],
  ['TRAININGS-\nALLTAG','Der Club filmt nach unserer Aufnahmeliste kurze Szenen vom Aufwärmen, Sandsack, Partnerübungen und Abschluss. Wir montieren daraus den Ablauf einer Trainingseinheit.','Trainings-Reel\nmit Untertiteln'],
  ['WORKOUTS ZUM\nMITMACHEN','Ein Trainer legt Übungen und Ausführung fest und zeigt sie neu vor der Kamera. Wir ergänzen die von ihm bestätigten Zeiten oder Wiederholungen.','Mitmach-Reel\noder Übungskarte']
 ]},
 {title:'DEIN EINSTIEG',goal:'Den Einstieg erklären und Fragen vor dem Probetraining beantworten.',rows:[
  ['PROBE-\nTRAINING','Wir planen neue Aufnahmen vom Eingang über die Anmeldung bis zur Ausleihe. Ein Trainer erklärt den Einstieg; wir ergänzen die bestätigten Fakten.','Reel:\nSo läuft die\nerste Runde'],
  ['ANFÄNGER-\nKURSE','Ein Trainer beantwortet häufige Einstiegsfragen per Handyvideo. Aus denselben geprüften Antworten gestalten wir zusätzlich einen verständlichen FAQ-Beitrag.','FAQ-Karussell\nund Kurzvideo'],
  ['KIDS UND\nAUSRÜSTUNG','Neue Detailfotos zeigen Handschuhe, Bandagen und benötigte Ausrüstung. Ein Trainer erklärt die Kids-Gruppe. Erkennbare Kinder filmen wir nur mit geklärter Einwilligung.','Packliste und\nKids-Einstieg']
 ]},
 {title:'KULT & OLD SCHOOL',goal:'Die Geschichte des Clubs erzählen und Gym sowie Merch greifbar machen.',rows:[
  ['FAMILIEN-\nGESCHICHTE','Wir führen ein neues Gespräch mit der Familie und halten bestätigte Stationen fest. Fehlen Archivbilder, tragen aktuelle Porträts und Interviewausschnitte die Geschichte.','Interview-Reel\noder Bildserie'],
  ['GYM MIETEN','Wir planen einen neuen Rundgang und Aufnahmen von Raumdetails. Mit dem Club klären wir mögliche Nutzungen und den Anfrageweg.','Location-Reel\nund Infobeitrag'],
  ['MERCH','Neue Produktfotos entstehen im Gym, ergänzt durch Detail- oder Anprobeclips. Der Club bestätigt verfügbare Artikel, Größen und Preise vor dem Beitrag.','Produktpost\noder Merch-Reel']
 ]},
 {title:'RING FREI',goal:'Sportliche Entwicklung zeigen und die Werte des Clubs vermitteln.',rows:[
  ['WETTKÄMPFE\nUND TITEL','Der Club liefert bestätigte Ergebnisse und Namen. Neue Sportlerporträts ergänzen wir zu Ergebniskarten oder kurzen Interviews, auch ohne Kampfaufnahmen.','Ergebniskarte\noder Porträt'],
  ['KAMPFABENDE','Wir gestalten die Ankündigung aus bestätigten Termindaten. Beim Termin filmt das Team nach Aufnahmeliste Ankunft, Aufwärmen und Stimmung für den Rückblick.','Ankündigung\nRückblick'],
  ['KIDS UND\nRESPEKT','Ein Trainer erklärt eine konkrete Regel und zeigt eine passende Übung. Wir nutzen neue Traineraufnahmen oder Detailbilder und klären Einwilligungen vor Kinderaufnahmen.','Beitrag über\nRespekt im Training']
 ]}
];

function txt(s,t,x,y,w,h,size=24,color=C.chalk,font='Arial',bold=false){
 const q=s.shapes.add({geometry:'textbox',name:t.slice(0,70),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=t;q.text.style={fontSize:size,typeface:font,color,bold,insets:0,wrap:'square',autoFit:'none'};return q;
}
function head(s,t,x,y,w,h,size=65,color=C.chalk){return txt(s,t,x,y,w,h,size,color,'Impact')}
function blank(p,after,bg=C.ink){const {slide:s}=p.slides.insert({after,width:1280,height:720});s.background.fill=bg;s.speakerNotes.text=sources;return s}
async function clear(p,index){const found=await p.inspect({select:`$.slides[${index}].elements[*]`,include:['id']});p.delete(found.records.map(x=>x.id));return p.slides.getItem(index)}
function workflow(p){
 const s=blank(p,4);head(s,'WIE DAS MATERIAL ENTSTEHT',64,53,1152,95,65);
 txt(s,'Ein Beitrag pro Woche. Die Säulen liefern den Themenvorrat.\nFehlende Aufnahmen entstehen gezielt für die ausgewählten Themen.',68,161,1120,70,26,C.light);
 const steps=[
  ['BEDARF FESTLEGEN','Wir sichten vorhandene Fotos und Clips. Für fehlende Motive legen wir fest, welche neuen Aufnahmen die geplanten Beiträge brauchen.'],
  ['NEU AUFNEHMEN','Fehlende Fotos und Clips produzieren wir bei Bedarf an einem separat angebotenen Mediatag. Ergänzend liefert der Club kurze Handyaufnahmen nach Briefing.'],
  ['BEITRÄGE PRODUZIEREN','Wir wählen aus, schneiden die Clips und erstellen Untertitel, Gestaltung und Texte.'],
  ['PRÜFEN UND VERÖFFENTLICHEN','Der Club bestätigt Inhalte und Einwilligungen. Wir planen die freigegebenen Beiträge ein.']
 ];
 steps.forEach(([a,b],i)=>{const y=254+i*102;head(s,String(i+1).padStart(2,'0'),68,y-4,72,66,46,C.light);head(s,a,168,y,386,78,31);txt(s,b,566,y+1,650,92,24)});
 txt(s,'Ziel eines Mediatags: Materialvorrat für etwa 2–3 Monate, abhängig vom Themenplan.',68,680,1090,26,17,C.muted);
 return s;
}
function production(p,data,index){
 const s=blank(p,5+index);
 head(s,data.title,64,56,1152,94,69);txt(s,data.goal,68,168,1130,54,25,C.light);
 const table=s.tables.add({rows:4,columns:3,left:64,top:252,width:1152,height:398,columnWidths:[220,662,270],values:[['THEMA','SO ENTSTEHT NEUES MATERIAL','DARAUS WIRD'],...data.rows]});
 table.styleOptions={headerRow:false,totalRow:false,firstColumn:false,bandedRows:false,bandedColumns:false};
 table.borders.assign({fill:'none',width:0,style:'solid'});
 table.rows[0].height=38;for(let r=1;r<4;r++)table.rows[r].height=120;
 table.cells.block({row:0,column:0,rowCount:4,columnCount:3}).assign({fill:C.ink,margins:{left:0,right:22,top:4,bottom:4},anchor:'top'});
 for(let r=0;r<4;r++)for(let c=0;c<3;c++){
  const cell=table.getCell(r,c);cell.fill=C.ink;
  cell.text.style={fontSize:r===0?18:(c===0?29:23),typeface:r>0&&c===0?'Impact':'Arial',bold:r===0,color:r===0?C.light:C.chalk,verticalAlignment:'top',wrap:'square',autoFit:'none'};
 }
 txt(s,'Aufnahmeweg: Club-Handy nach Briefing oder separat gebuchter Drehtermin.',68,680,1090,26,17,C.muted);
 return s;
}
function drawTimeline(s){
 s.background.fill=C.chalk;head(s,'DER START',64,57,1152,120,94,C.ink);
 txt(s,'Ankündigung nach Weihnachten, gemeinsamer Start im Januar',68,179,1130,42,25,C.blue);
 const phases=[
  ['NACH WEIHNACHTEN 2026','Den Relaunch ankündigen','Erster Vorgeschmack auf den neuen Webauftritt. Den Start im Januar kommunizieren.'],
  ['JANUAR 2027','Website-Relaunch und Betreuungsstart','Die neue Website geht online. Parallel startet der regelmäßige Feed mit einem Beitrag pro Woche.'],
  ['AB FEBRUAR 2027','Formate fortführen und nachsteuern','Reaktionen und Anfragen auswerten. Nächste Themen und benötigte Aufnahmen monatlich abstimmen.']
 ];
 phases.forEach(([a,b,c],i)=>{const y=267+i*136;head(s,a,68,y,492,58,i===0?34:39,C.blue);txt(s,b,582,y,630,45,27,C.ink,'Arial',true);txt(s,c,584,y+54,620,73,23,C.ink)});
 s.speakerNotes.text=sources+' Der Startmonat ist Januar 2027, die Ankündigung folgt nach Weihnachten 2026. Ein genauer Tag ist noch nicht festgelegt. Veröffentlichungen erfolgen nach gemeinsamer Freigabe.';
}
function drawOffer(s){
 head(s,'DIE ZUSAMMENARBEIT',64,58,1150,110,73);
 head(s,'1.890 €',68,205,530,120,100,C.light);txt(s,'Start-Paket, einmalig',72,337,500,40,26);
 txt(s,'Website und Relaunchvorbereitung\nContent-Konzept und Vorlagen\nMaterialsichtung und Produktionsplan\nProfile und Präsentation',72,410,530,186,24);
 head(s,'850 €',688,205,500,120,100,C.light);txt(s,'Betreuung pro Monat',692,337,490,40,26);
 txt(s,'Betreuung ab Januar 2027\nEin Beitrag pro Woche\nAufnahmebriefings, Schnitt und Gestaltung\nTexte, Planung und Veröffentlichung\nAbstimmung und Monatsauswertung',692,410,524,186,24);
 txt(s,'Fehlendes Foto- und Videomaterial produzieren wir gezielt vorab.\nEin Mediatag zur Materialproduktion kommt als separates Angebot dazu.',72,594,1120,66,23,C.light);
 txt(s,'Domain und Hosting über den Club. Umsatzsteuerangabe vor finalem Angebot klären.',72,674,1090,27,17,C.muted);
 s.speakerNotes.text=sources+' 850 Euro ist das neue monatliche Betreuungshonorar ab Januar. Das Start-Paket bleibt bei den bereits bestätigten 1.890 Euro. Vor-Ort-Drehtage sind nicht pauschal im Monatshonorar enthalten. Steuerliche Preisangabe vor finalem Angebot klären.';
}
export async function revise(p){
 if(p.slides.items.length!==10)throw new Error('Diese Überarbeitung erwartet den verifizierten Stand v2 mit zehn Folien.');
 const snap=await p.inspect({select:'$.slides[*]',include:['id','elements.text']});
 const remove=snap.records.filter(s=>s.elements.some(e=>e.text==='DIE WEBSITE\nALS FILM'||e.text==='GESICHTER\nAUS DEM CLUB')).map(s=>s.id);
 if(remove.length!==2)throw new Error('Die zu ersetzenden Folien sind nicht eindeutig.');
 p.delete(remove);
 workflow(p);pillars.forEach((data,i)=>production(p,data,i));
 drawTimeline(await clear(p,11));drawOffer(await clear(p,12));
 for(const sh of p.slides.getItem(0).shapes.items)if(sh.text.toString()==='Entwurf v2, 16.11.2026')sh.text='Entwurf v3, 23.11.2026';
 for(const sh of p.slides.getItem(13).shapes.items)if(sh.text.toString()==='Website und Bildwelt abstimmen\nMaterial gemeinsam auswählen\nStarttermin festlegen')sh.text='Aufnahmeweg und Mitwirkende abstimmen\nWebsite und Beiträge freigeben\nRelaunch im Januar terminieren';
 for(let i=1;i<p.slides.items.length;i++){
  const s=p.slides.getItem(i);let page;
  for(const sh of s.shapes.items)if(sh.position.left>=1190&&sh.position.top>=660&&/^\d{2}$/.test(sh.text.toString()))page=sh;
  if(page)page.text=String(i+1).padStart(2,'0');else txt(s,String(i+1).padStart(2,'0'),1204,672,40,25,16,i===11?C.blue:C.muted);
 }
 return {slides:p.slides.items.length,productionPages:[7,8,9,10,11]};
}
export async function build(p){await buildV2(p);return revise(p)}
