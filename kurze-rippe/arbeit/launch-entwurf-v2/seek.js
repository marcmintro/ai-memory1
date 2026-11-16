window.prepareFilm=async function(){
 await document.fonts.ready;
 document.querySelectorAll('img').forEach(i=>i.loading='eager');
 await Promise.all([...document.querySelectorAll('img')].map(i=>i.decode().catch(()=>{})));
 window.gsap.ticker.sleep();window.gsap.globalTimeline.pause();window.filmIntro.pause(0);
 window.filmTeam=ScrollTrigger.getAll().find(s=>s.trigger?.id==='team');
 window.filmTeam.disable(true);
 document.querySelectorAll('.pre').forEach(e=>e.classList.remove('pre'));
 ScrollTrigger.refresh();
};
const clamp=x=>Math.max(0,Math.min(1,x));const ease=x=>{x=clamp(x);return x*x*(3-2*x)};
const cuts=[0,7,11,15,19,24,28,32];
function headingY(id,offset=128){
 const section=document.getElementById(id),head=section.querySelector('h2')||section;
 return head.getBoundingClientRect().top+window.scrollY-offset;
}
window.seekFilm=function(t){
 const stAll=ScrollTrigger.getAll();const hero=stAll.find(s=>s.trigger?.id==='hero');
 window.filmIntro.time(Math.min(t,3),false);
 const track=document.getElementById('teamTrack');
 gsap.set(track,{x:t>=19&&t<24?-900*ease((t-19)/5):0});
 let y=0;
 if(t<7){y=hero.start+(hero.end-hero.start)*ease((t-1.8)/4.3);}
 else if(t<11){y=headingY('kurse')+70*ease((t-7)/4);}
 else if(t<15){y=headingY('probetraining')+45*ease((t-11)/4);}
 else if(t<19){
  const tab=document.getElementById(t<17?'tab-city':'tab-nord');
  if(tab.getAttribute('aria-selected')!=='true'){tab.click();ScrollTrigger.refresh();}
  y=headingY('kursplan')+20*ease((t-15)/4);
 }
 else if(t<24){
  y=headingY('trainer')+30*ease((t-19)/5);
 }
 else if(t<28){y=headingY('gym-mieten')+100*ease((t-24)/4);}
 else{y=headingY('kontakt')+40*ease((t-28)/4);}
 window.scrollTo(0,y);ScrollTrigger.update();
 for(const st of stAll){if(st!==window.filmTeam&&st.animation&&st.vars.scrub)st.animation.totalProgress(st.progress,false);}
 // The city switch creates a short entrance tween. Resolve it before capturing.
 document.querySelectorAll('#week .slot').forEach(e=>{e.style.opacity='1';e.style.transform='none'});
 document.querySelectorAll('.pre').forEach(e=>e.classList.remove('pre'));
 const ticker=document.querySelector('.ticker-track');if(ticker)ticker.style.transform=`translateX(${-t*15}px)`;
 let fade=0;
 for(const cut of cuts.slice(1,-1)){const d=Math.abs(t-cut);fade=Math.max(fade,clamp(1-d/.23));}
 if(t>31.4)fade=Math.max(fade,clamp((t-31.4)/.6));
 document.getElementById('filmFade').style.opacity=fade;
 track.style.transform=`translateX(${t>=19&&t<24?-900*ease((t-19)/5):0}px)`;
 window.gsap.ticker.sleep();
};
