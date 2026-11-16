from pathlib import Path
import urllib.request,re,shutil
root=Path(__file__).parent
source=root.parent/'website-entwurf'
(root/'assets').mkdir(parents=True,exist_ok=True)
for name in ['gsap.min.js','ScrollTrigger.min.js']:
    target=root/'assets'/name
    if not target.exists():
        urllib.request.urlretrieve('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/'+name,target)
fontroot=root/'assets/fonts';fontroot.mkdir(parents=True,exist_ok=True)
for name,family in {'stencil':'Big+Shoulders+Stencil+Display:wght@900','display':'Big+Shoulders+Display:wght@900','body':'Inter+Tight:wght@400;600'}.items():
    if (fontroot/(name+'0.ttf')).exists(): continue
    css=urllib.request.urlopen('https://fonts.googleapis.com/css2?family='+family).read().decode()
    for i,url in enumerate(re.findall(r'url\((https[^)]+)\)',css)):
        urllib.request.urlretrieve(url,fontroot/(name+str(i)+'.'+url.rsplit('.',1)[-1]))
shutil.copytree(source/'img',root/'assets/img',dirs_exist_ok=True)
html=(source/'blau.html').read_text()
html=re.sub(r'<link[^>]*>','',html)
html=html.replace('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/','assets/')
html=html.replace('img/','assets/img/')
html=html.replace("gsap.timeline({defaults:{ease:'expo.out'}})","window.filmIntro = gsap.timeline({defaults:{ease:'expo.out'}})")
fonts="""<style>
@font-face{font-family:'Big Shoulders Stencil Display';src:url('assets/fonts/stencil0.ttf');font-weight:900}
@font-face{font-family:'Big Shoulders Display';src:url('assets/fonts/display0.ttf');font-weight:900}
@font-face{font-family:'Inter Tight';src:url('assets/fonts/body0.ttf');font-weight:400}
@font-face{font-family:'Inter Tight';src:url('assets/fonts/body1.ttf');font-weight:600}
html{scroll-behavior:auto!important}*{transition:none!important}::-webkit-scrollbar{display:none}
</style>"""
html='<!doctype html><html lang="de"><meta charset="utf-8">'+fonts+html
html+='<div id="filmFade" style="position:fixed;inset:0;z-index:9999;background:#0b0d10;opacity:0;pointer-events:none"></div><script src="seek.js"></script></html>'
(root/'website-film.html').write_text(html)
print('Originaler Webentwurf mit lokalen Assets bereit.')
