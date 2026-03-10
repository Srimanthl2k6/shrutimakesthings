"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Star, Heart, Cloud, Sparkles, Coffee, ArrowRight, Mail, X, Send, Github } from 'lucide-react';

const ownerAsciiArt = `#*###########+*###########%@@@%+-##%%%%###*###*#***++++=:...:=+*%#@@@======+=+%@@@@@@@@@@@@@@@@@@@@@
*++******###**##%#########@@@@@=+*#%%%%###**#**######*-.-:-++==#*+@@@======+=*%@@@@@@@@@@@@@@@@@@@@%
#===+++*+*###*%%%%########%@@@@####%%#########%%%##%%##**-=====##*@@%====-===%@@@@@@@@@@@@%%@@@@@@#+
###*+=+*+**%#+%%%%+###%%#*%@@%@%#*#%%#####%%%%%%%###%%###%#====#%#@@%++*+++++%@@@@@@@@@@@%*+*%@@@%==
######%%%%%%#%%%@%%*#%%%#*#@@@@%#*####%%#%@%%%%%%#%%#%%%%%%%+=+#%%@@#+-*#####%%@@@@@@@@@@@%@@%%@%*==
##+++++***%%%##%@@%%##%%#*#@@@%%#*%%%%%%%%%%@%%%%%%%%%%%%%@%%##%#%@@@########%%@@@@@@@@@@@@%%@@@@++=
##*=--=+++#%%%*@@@%###%%#**@@@@%%#%%%%%%%%@%%%%%%%@%%%@%%@@@%%%%#==+%#%%#%%##%%@@%%%@@@@%@%%@@@@%+++
##########%@@%#@@@%%%#%%#**%@@@%%%%%@%%%%%@@%%%@@@%%#%%%%@@@%%#=-===-=++**++#@@@@@@%@@@@@@%@@@@@#***
####%%%%%%%@@@%@@@@@%#%%%#*#%@%%#%%@%%@@@@%%#%%%%%%###%%%%@%%%#=--==---+%%##=#%@@+@@@@@@%@%@@@@@%###
*##*=-====-*%%%=%@@%%#%%%#**%%##*#@@%@@@@@@##%%%%%##**#%%%%@@@@+====-----==++%@@@@@@@@@@@@%@@@@@%##%
=###-......:%%#-#%%*%#####**%%%%*%@@@@@@@@%##@%%%%##***%%%#@@@@@====-------=*%@@%@@@@@@@@%@@@%@%%##%
-=###:::::::#%%**%@%%*##%#**@@%%#@@%@@@@@@#*#%%%#%##**#@@@%@@@@@#===--=====+%@@@@@@@@@@@@%@@@%@%%%%%
**###--==:-#*@@%=@@@%%#%%%**%%%%%@@@@@@@@%#%@@@@%@%%*##@%@**%@@@%==-=--=-==+@@@@%@@@@@@@@%@@@@@%%%%@
######+*##%%%@@@%@@@%@%%%%###@%%@@@@@@@@@@%@@%%%###++*%@%+###@@@@+--======-*@@@@@@@@@@@@%%@@%@@%%%%@
%%%##%%%%%%%%@%%%@@@%%%%%%#*#@%%@@@@@@@%##*+=+***+==++**++=-#@@@@*=---===--+#@@@@@@@@@@@@@@@@@%%%%@@
#%%#####%##***%#*:@%*##%%%%*#@%@@@@@@@@#+==+++=++=----====--#@@@@*=---===--*%@@@@@@@@@@@%@@@@@@%%%@@
#######=**###%%%%%%%%%%%%%%##%%@@@@@@@@*+====-=++=---=----==@@@@@#=--===---#@@@@@@@@@@@@%@@@@@@%%@@@
##*+%##-+%%%%%%%%%%%%%%%%%%###@@@@@@@@@#++=====++=--------=#@@@@@%+-====--=#%@@@@@@@@@@@@@@@@@@%@@@@
*+++*##*=%%%%%%%%%%%%%%#%%%###@@@@@@@@@@*++====+**+++=---=*%@@@@@@%+-===--=%#@@@@@@@@@@@@@@@@@@@@@@@
*=**+%#%=#%%%%%%%%%%%%%%%%%%##@@@@@@@@@@@**++===++++==-==*@@@@@@@@@#*==-:-+%*@@@@@@@@@@@@@@@@@@@@%@@
+=-==*##==%@@@@@@%%%%%%@%%%%#%%@@@@@@@@@@@#*+**#****+*+=#@@@@@@@@@@%*+=---+%#@@@@@@@@@@@@@@@@@@@@@@%
++--:.##*.#%%%@%%%%%%%%#*+####%%%@@@@@@@@@@%#*****+++=+@@@@@@@@@@@@@%*-:--*#*%@@@@@@@@@@@@@@@@@@@@@+
%#*+-:###=+%%*+=---==+++*##*###%@@@@@@@@@@@@%#*++====+@@@@@@@@@@@@@@@%**###*+=+=-+*#%%@@@@@@@@@@@@%=
%%%%%*+%%#+*#%%#*#%%%#*====+*%@@@@@@@@@@@@@@@#*+*****#%@%@@@@@@@@@@@@@*+=-%##@#%#####***+=-=+#@@@@#=
==+**##%%%%%@%##%%##+--===*#%%@%@%%@@@@@@@@@@@#+++++*##%%@@@@@@@@@@@@@%#+=%%+##@@@@@@@@%%%%%%%%#*+==
####*#*#%%%@@@@%%**--===+*#%%%%@%%%@@@@@@@@@@@#*+++++++%%%@@@@@%@@@@@@@%**%%**@@@@@@@@@@@@@@@@@@@+#%
##***#**%%%*%%##*+=====+##%%%%%@@%@@@@@@@@@@@%%*+++++++%@@%@@@@@@%@@@@@@##%#+#@@@%%@@@@@@@@@@@@@=+=-
####*=**%%%+*##*+===+****#%%%%@@%@@@@@@@@@@@@@%*++++++*@@@@@@@@@@@@@@@%@%##*+#%%@@@@@@@@@@@@@@@*++--
#####****%%#+##*+=+***++#%%%@@@%@@@@@@@@@@@@@%%**+++++*@@@@%@@@@@@@@@@%%%%#+*#%%%@@@@@+=%@@@%##*++--
###*#****#%%*#*+***++++*#%%@@@%@@@@@@@@@@@@@@@%**+++++*@%@@@%@@@@@@@@@%@%%#**##%@@@@@+==+@@%*-*++=-=
**********%%##***++++++*%%@@@@@@@@@@@@@@@@@@@@#*+++++++@%@@@@@@@@@@@@@@@%%%#+*+=%@@@@++==#++++***==-
*******++*%##***+++===+*%%@@@@@@@@@@@@@@@@@@@@%*++++++*@%@@@@%@@@@@@@@@@@%%#+*+==#%@#+==+#*#****+=:-
#*********###*#++====+*#%%@@@@@@@@@@@@@@@@@@@@@%+=++++#%%%@@@%%%@@@@@@@@@@@%*#+==*%@*===*****#**--==
#**#****####*+=====++*#%%%@@@@@@@@@@@@@@@@@@@@%%%=+*++#%%%@@@%%%@@@@@%%%@@@%##+==+%%+===*#**##**===-
###*######*+======++*###%%@@@@@@@@@@@@@@@@@@@@%%%*=*++@%%%%@@%@%%%%%@%%%@@@%##+===%#+===***##**+==--
#######%#++=====++**####%@@@@@@@@@@@@@@@@@@%@@%%%%****%%@%%%@%%%%%%%%@%%%@@@##+===#*====#**##+#-:---
####%#%#++==+++****#**##%@@@@@@@@@@@@@@@@@@%@@%%%%%%##%%%%%%@%%%%%%%%@@%%@@@#**===**===+*******----=
####%%#++++++#***###**##@@@@@@@@@@@@@@@@@@%@@%@%%%%%%#%%%%%%%%%%%%%%@@@%@@@%#**+==-=++=##****#=-===-
###%%#***###****###***#%@@@@@@@@@@@@@@@@@%@@%%%%%%%%%%%%%%%@%%%%%%@@@@@@@@@%#**+======++===#*#------
##%%%###*******##*++**#%@@@@@@@@@@@@@@@@@@@%%%@%%%%%%%%%%%%%%%@@@@@@@@@@@@@%+*++++++++**+++=*#***#**
%%%%%########***+++++*#%@@@@@@@@@@@@@@@@@%@@%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@#*++++***##+==+==######*`;

const CuteCard = ({ children, className = "" }) => (
  <div className={`bg-[#FDFBF7] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 ${className}`}>
    {children}
  </div>
);

const CuteButton = ({ children, onClick, className = "", href = "#" }) => {
  const inner = (
    <button
      className={`bg-yellow-200 border-4 border-black font-black text-lg py-4 px-8 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 ${className}`}
    >
      {children}
    </button>
  );

  if (onClick) {
    return <a href={href} className="inline-block" onClick={onClick}>{inner}</a>;
  }

  return href.startsWith('#') || href.startsWith('mailto') ? (
    <a href={href} className="inline-block">{inner}</a>
  ) : inner;
};

const PaperAirplane = ({ animationName, delay, duration }) => {
  const [popped, setPopped] = useState(false);
  const planeRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const lastPos = useRef({ x: -1000, y: -1000 });

  const handlePop = (e) => {
    e.stopPropagation();
    if (popped) return;
    setPopped(true);
    setTimeout(() => {
      setPopped(false);
      setTrail([]);
      lastPos.current = { x: -1000, y: -1000 };
    }, 1500);
  };

  useEffect(() => {
    if (popped) return;
    let animationFrameId;

    const trackPosition = () => {
      if (planeRef.current) {
        const rect = planeRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const style = window.getComputedStyle(planeRef.current);
        const currentZIndex = style.zIndex !== 'auto' ? style.zIndex : 60;

        const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
        if (dist > 35) {
          lastPos.current = { x, y };
          const id = Date.now() + Math.random();
          setTrail(prev => {
            const newTrail = [...prev, { id, x, y, zIndex: currentZIndex }];
            return newTrail.slice(-40);
          });
        }
      }
      animationFrameId = requestAnimationFrame(trackPosition);
    };

    animationFrameId = requestAnimationFrame(trackPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [popped]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(dot => now - dot.id < 2500));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trail.map(dot => (
        <div
          key={dot.id}
          className="fixed w-2.5 h-2.5 bg-gray-400 rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            zIndex: dot.zIndex,
            animation: 'trailFade 2.5s ease-out forwards'
          }}
        />
      ))}
      <div
        ref={planeRef}
        className="fixed pointer-events-none"
        style={{
          top: 0,
          left: 0,
          animation: `${animationName} ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <div
          className="pointer-events-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 relative flex items-center justify-center w-12 h-12"
          onClick={handlePop}
        >
          {!popped ? (
            <Send className="text-black fill-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-45" size={36} strokeWidth={2} />
          ) : (
            <div 
              className="font-black text-3xl text-pink-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] select-none absolute" 
              style={{ animation: 'popText 0.5s ease-out forwards' }}
            >
              *pop!*
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const GuideAirplane = ({ targetId, startX, startY, startScrollY, onComplete }) => {
  const [pos, setPos] = useState({ x: startX, y: startY, rotation: 45 });
  const [trail, setTrail] = useState([]);
  const [popped, setPopped] = useState(false);
  const lastPos = useRef({ x: startX, y: startY });
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      onCompleteRef.current();
      return;
    }

    const targetTop = targetElement.offsetTop + 100;
    const targetLeft = window.innerWidth / 2;
    const targetScrollY = Math.max(0, targetElement.offsetTop - 100);

    const distance = Math.abs(targetScrollY - startScrollY);
    const duration = Math.max(1200, Math.min(distance * 0.8, 2500));
    const startTime = performance.now();
    let animationFrameId;

    const offsetX = startX > window.innerWidth / 2 ? -250 : 250;
    const controlX = (startX + targetLeft) / 2 + offsetX;
    const controlY = startY + (targetTop - startY) * 0.7;

    const animate = (time) => {
      let progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;

      const easedT = progress < 0.5 ? 4 * Math.pow(progress, 3) : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const u = 1 - easedT;

      const currentX = u * u * startX + 2 * u * easedT * controlX + easedT * easedT * targetLeft;
      const currentY = u * u * startY + 2 * u * easedT * controlY + easedT * easedT * targetTop;

      const dx = 2 * u * (controlX - startX) + 2 * easedT * (targetLeft - controlX);
      const dy = 2 * u * (controlY - startY) + 2 * easedT * (targetTop - controlY);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setPos({ x: currentX, y: currentY, rotation: angle });
      window.scrollTo(0, currentScrollY);
      const currentScrollY = startScrollY + (targetScrollY - startScrollY) * easedT;

      const dist = Math.hypot(currentX - lastPos.current.x, currentY - lastPos.current.y);
      if (dist > 35) {
        setTrail(prev => [...prev.slice(-40), { id: Date.now() + Math.random(), x: currentX, y: currentY }]);
        lastPos.current = { x: currentX, y: currentY };
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setPopped(true);
        setTimeout(() => {
          setTrail([]);
          setTimeout(() => onCompleteRef.current(), 400);
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetId, startX, startY, startScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(dot => now - dot.id < 2500));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[200]">
      {trail.map(dot => (
        <div
          key={dot.id}
          className="absolute w-3 h-3 bg-pink-400 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            transform: 'translate(-50%, -50%)',
            animation: 'trailFade 2.5s ease-out forwards'
          }}
        />
      ))}
      <div
        className="absolute pointer-events-none flex items-center justify-center w-12 h-12"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
      >
        {!popped ? (
          <div style={{ transform: `rotate(${pos.rotation + 45}deg)` }}>
            <Send className="text-black fill-yellow-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" size={48} strokeWidth={2} />
          </div>
        ) : (
          <div
            className="font-black text-4xl text-pink-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] select-none absolute"
            style={{ animation: 'popText 0.5s ease-out forwards' }}
          >
            *pop!*
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showAsciiModal, setShowAsciiModal] = useState(false);
  const [guideFlight, setGuideFlight] = useState(null);

  const flyToSection = (e, id) => {
    e.preventDefault();
    if (guideFlight) return;
    setGuideFlight({
      targetId: id,
      startX: e.clientX,
      startY: e.clientY + window.scrollY,
      startScrollY: window.scrollY
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const asciiRow = " ૮ ˶ᵔ ᵕ ᵔ˶ ა   ★   /\\_/\\   ♡   ( o.o )   ✧   > ^ <   ☁︎   (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧   ☾   ☼   ( ˘ ³˘)♥   *ೃ༄ ";
  const asciiBackground = Array(60).fill(asciiRow).join("\n\n");

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black font-sans relative overflow-x-hidden selection:bg-pink-300 selection:text-black">
      
      {showAsciiModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setShowAsciiModal(false)}>
          <div className="bg-[#FDFBF7] border-4 border-black p-6 md:p-10 rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative max-w-3xl w-full max-h-[95vh] overflow-y-auto animate-float-fast" style={{ animationDuration: '8s' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowAsciiModal(false)}
              className="absolute top-6 right-6 bg-pink-200 border-4 border-black p-3 rounded-full hover:bg-pink-300 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0"
            >
              <X strokeWidth={4} size={24} />
            </button>

            <div className="flex flex-col items-center mt-8">
              <div className="bg-white border-4 border-black p-3 md:p-6 rounded-3xl w-full overflow-x-auto flex justify-center items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <pre className="text-[5px] sm:text-[6.5px] md:text-[8px] lg:text-[9.5px] leading-[5px] sm:leading-[6.5px] md:leading-[8px] lg:leading-[9.5px] font-mono font-bold text-black text-center select-none">
                  {ownerAsciiArt}
                </pre>
              </div>
              <span className="mt-8 font-black text-xl md:text-2xl bg-yellow-300 border-4 border-black px-8 py-3 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg]">
                That's me!
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes flySwirl1 {
          0% { transform: translate(-20vw, 20vh) rotate(15deg); z-index: 60; }
          25% { transform: translate(30vw, 60vh) rotate(45deg); z-index: 60; }
          50% { transform: translate(60vw, 30vh) rotate(-20deg); z-index: 5; }
          75% { transform: translate(80vw, 70vh) rotate(30deg); z-index: 5; }
          100% { transform: translate(120vw, 40vh) rotate(15deg); z-index: 60; }
        }
        @keyframes flyLoop {
          0% { transform: translate(-20vw, 40vh) rotate(15deg); z-index: 60; }
          30% { transform: translate(40vw, 30vh) rotate(15deg); z-index: 60; }
          40% { transform: translate(50vw, 10vh) rotate(-70deg); z-index: 5; }
          50% { transform: translate(40vw, 0vh) rotate(-160deg); z-index: 5; }
          60% { transform: translate(30vw, 20vh) rotate(-250deg); z-index: 60; }
          70% { transform: translate(50vw, 40vh) rotate(-340deg); z-index: 60; }
          100% { transform: translate(120vw, 20vh) rotate(-345deg); z-index: 60; }
        }
        @keyframes flyWave {
          0% { transform: translate(120vw, 70vh) scaleX(-1) rotate(-15deg); z-index: 5; }
          25% { transform: translate(80vw, 20vh) scaleX(-1) rotate(-45deg); z-index: 60; }
          50% { transform: translate(50vw, 80vh) scaleX(-1) rotate(30deg); z-index: 5; }
          75% { transform: translate(20vw, 30vh) scaleX(-1) rotate(-30deg); z-index: 60; }
          100% { transform: translate(-20vw, 60vh) scaleX(-1) rotate(15deg); z-index: 5; }
        }
        @keyframes flyDive {
          0% { transform: translate(-20vw, 10vh) rotate(45deg); z-index: 60; }
          20% { transform: translate(30vw, 80vh) rotate(30deg); z-index: 5; }
          40% { transform: translate(50vw, 90vh) rotate(-30deg); z-index: 5; }
          60% { transform: translate(70vw, 20vh) rotate(-45deg); z-index: 60; }
          80% { transform: translate(90vw, 10vh) rotate(15deg); z-index: 60; }
          100% { transform: translate(120vw, 30vh) rotate(25deg); z-index: 5; }
        }
        @keyframes popText {
          0% { transform: scale(0.5) rotate(-15deg); opacity: 1; }
          50% { transform: scale(1.5) rotate(0deg); opacity: 1; }
          100% { transform: scale(2) rotate(15deg); opacity: 0; }
        }
        @keyframes trailFade {
          0% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
        }
        @keyframes miniOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(32px) rotate(135deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(32px) rotate(135deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
          animation-delay: -1.5s;
        }
      `}</style>

      <div
        className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none z-0 opacity-[0.05] font-mono text-xl md:text-2xl whitespace-pre-wrap leading-[4rem] text-black flex items-center justify-center select-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(-2deg)`,
        }}
      >
        {asciiBackground}
      </div>

      <PaperAirplane animationName="flySwirl1" delay={0} duration={14} />
      <PaperAirplane animationName="flyWave" delay={3} duration={18} />
      <PaperAirplane animationName="flyLoop" delay={7} duration={16} />
      <PaperAirplane animationName="flyDive" delay={10} duration={15} />

      {guideFlight && (
        <GuideAirplane
          targetId={guideFlight.targetId}
          startX={guideFlight.startX}
          startY={guideFlight.startY}
          startScrollY={guideFlight.startScrollY}
          onComplete={() => setGuideFlight(null)}
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 flex flex-col gap-24">
        
        <nav className="flex justify-between items-center w-full bg-[#FDFBF7] border-4 border-black rounded-full px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sticky top-6 z-50 transition-transform hover:-translate-y-1">
           <div className="font-black text-2xl tracking-tighter flex items-center gap-3">
             <Heart className="fill-pink-300 stroke-black stroke-2" size={28} />
             <span>Shruti Verma</span>
             <button 
               onClick={() => setShowAsciiModal(true)} 
               className="ml-2 bg-pink-200 border-2 border-black rounded-full w-10 h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:rotate-6 active:translate-y-0 active:shadow-none transition-all cursor-pointer relative"
               title="That's me!"
             >
               <span className="text-xl leading-none relative z-10">🎀</span>
               <div className="absolute top-1/2 left-1/2 pointer-events-none z-20" style={{ animation: 'miniOrbit 3s linear infinite' }}>
                 <Send className="text-black fill-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" size={14} strokeWidth={2.5} />
               </div>
             </button>
           </div>
           <div className="hidden md:flex gap-8 font-bold text-lg">
             <a href="#about" onClick={(e) => flyToSection(e, 'about')} className="hover:underline decoration-4 underline-offset-4 decoration-pink-300 transition-colors cursor-pointer">About</a>
             <a href="/Shruti_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-4 underline-offset-4 decoration-green-300 transition-colors cursor-pointer">Resume</a>
             <a href="#projects" onClick={(e) => flyToSection(e, 'projects')} className="hover:underline decoration-4 underline-offset-4 decoration-blue-300 transition-colors cursor-pointer">Projects</a>
             <a href="#contact" onClick={(e) => flyToSection(e, 'contact')} className="hover:underline decoration-4 underline-offset-4 decoration-yellow-300 transition-colors cursor-pointer">Contact</a>
           </div>
        </nav>

        <section className="min-h-[75vh] flex flex-col justify-center items-center text-center relative mt-4">
          
          <div className="absolute top-10 left-[5%] hidden md:block pointer-events-none" style={{ transform: `translateY(${scrollY * -0.25}px)` }}>
            <div className="animate-float">
              <Star size={72} className="text-black fill-yellow-300 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]" strokeWidth={2} />
            </div>
          </div>
          <div className="absolute top-32 right-[5%] hidden md:block pointer-events-none" style={{ transform: `translateY(${scrollY * -0.15}px)` }}>
            <div className="animate-float-delayed">
              <Cloud size={90} className="text-black fill-blue-200 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]" strokeWidth={2} />
            </div>
          </div>
          <div className="absolute bottom-10 left-[15%] hidden md:block pointer-events-none" style={{ transform: `translateY(${scrollY * -0.3}px)` }}>
            <div className="animate-float-fast">
              <Sparkles size={60} className="text-black fill-pink-300 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]" strokeWidth={2} />
            </div>
          </div>

          <div className="bg-[#FDFBF7] border-4 border-black rounded-[3rem] p-10 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-3xl relative z-10">
            <div className="absolute -top-8 -right-8 text-black bg-white border-4 border-black rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 animate-float">
              <span className="text-3xl font-mono">(ᵔᴥᵔ)</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Oh hi there! <br/> I'm <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-pink-200 transform -rotate-2 rounded-xl -z-10 border-4 border-black"></span>
                <span className="relative px-2">Shruti</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-10 text-gray-800 leading-relaxed">
              and I make things :)
            </p>
            <div className="flex justify-center">
              <CuteButton href="#projects" onClick={(e) => flyToSection(e, 'projects')}>
                See my work <ArrowRight strokeWidth={3} size={20} />
              </CuteButton>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 scroll-mt-32 relative">
          <div className="absolute right-0 top-10 pointer-events-none hidden md:block" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
            <div className="animate-float">
              <Coffee size={100} className="text-black fill-[#FDFBF7] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]" strokeWidth={1.5} />
            </div>
          </div>
          <CuteCard className="w-full border-pink-300">
            <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4">
              <span className="text-3xl font-mono bg-white border-2 border-black rounded-full px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">?</span> 
              About Me
            </h2>
            <div className="text-xl font-medium space-y-6 text-gray-800 leading-relaxed">
              <p>I'm a 3rd year AI/ML engineering student with a penchant for NLP, GenAI, game development, and debate!</p>
              <p>I love research and blending my technological background with interdisciplinary ones, including but not limited to sustainability. I'm a polyglot and have taught myself sign language (even the deaf deserve to be heard). </p>
              <p>When I'm not coding or yapping away, you can find me reading classical literature and philosophy!</p>
              <div className="mt-8">
                <h3 className="text-2xl font-black mb-4">My Toolkit:</h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'C++', 'Java', 'React', 'Node.js', 'Godot', 'Machine Learning', 'NLP'].map(skill => (
                    <span key={skill} className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </CuteCard>
        </section>

        <section id="projects" className="py-12 scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4">
            <Sparkles className="fill-yellow-300 stroke-black stroke-2" size={40} />
            Things I've Built
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <a href="https://github.com/SleepyCinnabon17/NLP-SOAP-PROJECT" target="_blank" rel="noopener noreferrer" className="block group outline-none">
              <CuteCard className="bg-blue-50 group-hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="h-56 bg-white border-4 border-black rounded-2xl mb-6 flex items-center justify-center font-mono text-gray-500 text-lg overflow-hidden relative">
                  <span className="text-6xl">🩺</span>
                  <div className="absolute -top-4 -left-6 bg-pink-200/80 border-2 border-black w-24 h-8 -rotate-12 z-10"></div>
                  <div className="absolute inset-0 bg-blue-100/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
                    <div className="bg-white border-4 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-black transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm">
                      <Github size={18} /> View on GitHub
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:underline decoration-4 underline-offset-4 decoration-blue-400">SOAP Medical LLM</h3>
                <p className="font-semibold text-gray-700 mb-6 text-lg">Built a domain-specific Large Language Model from scratch to generate structured medical notes from doctor-patient conversations. Trained on over 100k data sources!</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">NLP</span>
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Python</span>
                </div>
              </CuteCard>
            </a>

            <a href="https://github.com/SleepyCinnabon17/GAME-DEVELOPMENT" target="_blank" rel="noopener noreferrer" className="block group outline-none md:mt-12">
              <CuteCard className="bg-pink-50 group-hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="h-56 bg-white border-4 border-black rounded-2xl mb-6 flex items-center justify-center font-mono text-gray-500 text-lg overflow-hidden relative">
                  <span className="text-6xl">👗</span>
                  <div className="absolute -top-4 -right-6 bg-yellow-200/80 border-2 border-black w-24 h-8 rotate-12 z-10"></div>
                  <div className="absolute inset-0 bg-pink-100/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
                    <div className="bg-white border-4 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-black transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm">
                      <Github size={18} /> View on GitHub
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:underline decoration-4 underline-offset-4 decoration-pink-400">Fashion Stylist Game</h3>
                <p className="font-semibold text-gray-700 mb-6 text-lg">Designed and developed a fully interactive styling game with hand-drawn assets. Features a rule-based outfit evaluation system and real-time feedback.</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Godot</span>
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">GameDev</span>
                </div>
              </CuteCard>
            </a>

            <a href="https://github.com/SleepyCinnabon17/Parking-Lot-Management-System" target="_blank" rel="noopener noreferrer" className="block group outline-none">
              <CuteCard className="bg-yellow-50 group-hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="h-56 bg-white border-4 border-black rounded-2xl mb-6 flex items-center justify-center font-mono text-gray-500 text-lg overflow-hidden relative">
                  <span className="text-6xl">🚗</span>
                  <div className="absolute -top-4 -left-6 bg-blue-200/80 border-2 border-black w-24 h-8 -rotate-12 z-10"></div>
                  <div className="absolute inset-0 bg-yellow-100/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
                    <div className="bg-white border-4 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-black transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm">
                      <Github size={18} /> View on GitHub
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:underline decoration-4 underline-offset-4 decoration-yellow-400">Smart Parking System</h3>
                <p className="font-semibold text-gray-700 mb-6 text-lg">Engineered an OOP Java system to track vehicle entry, exit, and real-time availability across multiple floors to minimize traffic buildup.</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Java</span>
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">OOP</span>
                </div>
              </CuteCard>
            </a>

            <div className="block md:mt-12">
              <CuteCard className="bg-green-50 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="h-56 bg-white border-4 border-black rounded-2xl mb-6 flex items-center justify-center font-mono text-gray-500 text-lg overflow-hidden relative">
                  <span className="text-6xl">📦</span>
                  <div className="absolute -top-4 -right-6 bg-pink-200/80 border-2 border-black w-24 h-8 rotate-12 z-10"></div>
                </div>
                <h3 className="text-3xl font-black mb-3">In-Campus Delivery Startup</h3>
                <p className="font-semibold text-gray-700 mb-6 text-lg">Conducted a full SWOT analysis and automated ML models to forecast revenue growth. Performed pricing simulations to identify high-retention demographics!</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="bg-white border-2 border-black rounded-full px-4 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">ML</span>
                  <span className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Market Research</span>
                </div>
              </CuteCard>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 mb-20 scroll-mt-32">
          <div className="bg-purple-100 border-4 border-black rounded-[3rem] p-12 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 text-[10rem] opacity-20 -rotate-12 select-none pointer-events-none">✉️</div>
            <div className="absolute top-10 right-10 text-6xl opacity-30 rotate-45 select-none pointer-events-none">✦</div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 relative z-10">Let's build something cute!</h2>
            <p className="text-xl md:text-2xl font-bold mb-10 text-gray-800 relative z-10 max-w-2xl mx-auto">
              Whether you want to collaborate on an AI project, talk about game dev, or just say hi, my inbox is always open! You can also find me on <a href="https://linkedin.com/in/shruti-verma-539251298" className="underline decoration-wavy decoration-pink-500" target="_blank" rel="noreferrer">LinkedIn</a> or <a href="https://github.com/SleepyCinnabon17" className="underline decoration-wavy decoration-pink-500" target="_blank" rel="noreferrer">GitHub</a>.
            </p>
            <div className="flex justify-center relative z-10">
              <CuteButton href="mailto:shrutivermaaa17@gmail.com" className="bg-pink-300">
                Email Me! (ﾉ◕ヮ◕)ﾉ
              </CuteButton>
            </div>
          </div>
        </section>

      </div>

      <footer className="text-center pb-12 font-bold text-sm relative z-10">
        <p className="bg-white border-4 border-black inline-block px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          Designed with ♡ and a lot of caffeine.
        </p>
      </footer>
    </div>
  );
}