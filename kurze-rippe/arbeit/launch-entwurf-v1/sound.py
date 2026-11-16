import math,random,wave,struct
from pathlib import Path
random.seed(16)
sr=48000; duration=15
buf=[0.0]*int(sr*duration)
def add(start,length,func,gain):
    offset=int(start*sr)
    for j in range(int(length*sr)):
        i=offset+j
        if i>=len(buf):break
        buf[i]+=gain*func(j/sr)
for beat in range(23):
    t=.12+beat*.6
    if t>11:break
    add(t,.35,lambda x:math.sin(2*math.pi*(48*x+25*(1-math.exp(-25*x))/25))*math.exp(-x*13),.35)
    if beat%2==1:add(t,.16,lambda x:(random.random()*2-1)*math.exp(-x*35),.07)
    add(t+.3,.055,lambda x:(random.random()*2-1)*math.exp(-x*80),.025)
for t in [2.3,5,7.4]:
    add(t,.25,lambda x:(random.random()*2-1)*math.sin(math.pi*min(1,x/.25))**2*math.exp(-x*12),.12)
add(11.3,2.0,lambda x:sum(math.sin(2*math.pi*f*x)*math.exp(-x*d) for f,d in [(980,3.5),(1710,4.5),(2540,6.0)])/3,.18)
peak=max(abs(v) for v in buf);scale=.65/max(peak,.65)
for i in range(len(buf)):
    fade=min(1,i/sr/.02,(duration-i/sr)/.7)
    buf[i]*=scale*max(0,fade)
with wave.open(str(Path(__file__).parent/'sound.wav'),'wb') as f:
    f.setnchannels(1);f.setsampwidth(2);f.setframerate(sr)
    f.writeframes(b''.join(struct.pack('<h',int(max(-1,min(1,v))*32767)) for v in buf))
print('Originaler synthetischer Percussion-Entwurf, 15 Sekunden')
