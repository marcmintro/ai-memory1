from pathlib import Path
import re, urllib.request

root=Path(__file__).parent/'assets'/'fonts'
root.mkdir(parents=True,exist_ok=True)
families={
    'stencil':'Big+Shoulders+Stencil+Display:wght@900',
    'display':'Big+Shoulders+Display:wght@900',
    'body':'Inter+Tight:wght@400;600',
}
for name,family in families.items():
    css=urllib.request.urlopen('https://fonts.googleapis.com/css2?family='+family).read().decode()
    (root/(name+'.css')).write_text(css)
    urls=re.findall(r'url\((https[^)]+)\)',css)
    for i,url in enumerate(urls):
        ext=url.rsplit('.',1)[-1]
        urllib.request.urlretrieve(url,root/(name+str(i)+'.'+ext))
    print(name,len(urls))
