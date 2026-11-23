import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const N = 85, D = 140
    type P = { x:number; y:number; vx:number; vy:number; r:number; op:number }
    const pts: P[] = Array.from({length: N}, () => ({
      x: Math.random()*canvas.width, y: Math.random()*canvas.height,
      vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
      r: Math.random()*2+1, op: Math.random()*.4+.2,
    }))
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for (const p of pts) {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0||p.x>canvas.width) p.vx*=-1
        if(p.y<0||p.y>canvas.height) p.vy*=-1
      }
      for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, dist=Math.hypot(dx,dy)
        if(dist<D){
          ctx.strokeStyle=`rgba(43,196,180,${(1-dist/D)*.25})`; ctx.lineWidth=.7
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke()
        }
      }
      for (const p of pts){
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(43,196,180,${p.op})`; ctx.fill()
      }
      animId=requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize',resize) }
  },[])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

const c = { hidden:{}, show:{ transition:{ staggerChildren:.15, delayChildren:.3 } } }
const item = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.1,.25,1]}} }

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#BFECE2] via-[#C8F0E8] to-[#BFECE2] border-b border-teal-500/20 pt-24">
      <ParticleCanvas />
      
      {/* Soft luminous ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full"
             style={{background:'radial-gradient(circle,rgba(43,196,180,0.18) 0%,rgba(43,196,180,0.04) 50%,transparent 70%)'}} />
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full"
             style={{background:'radial-gradient(circle,rgba(153,246,228,0.3) 0%,transparent 70%)'}} />
      </div>

      {/* Floating clinic exterior backdrop */}
      <motion.div initial={{opacity:0,scale:1.05}} animate={{opacity:.50,scale:1}}
        transition={{duration:2,ease:'easeOut'}} className="absolute inset-0 pointer-events-none">
        <img src="/images/clinic-exterior.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,rgba(237,251,247,0.55) 0%,rgba(255,255,255,0.68) 100%)'}} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <motion.div variants={c} initial="hidden" animate="show">
          
          {/* Location badge */}
          <motion.div variants={item} className="mb-5 sm:mb-6 flex flex-wrap items-center gap-3">
            <span className="glass border border-teal-500/30 text-teal-900 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-2 shadow-sm bg-white/70">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Pogradec, Albania • Rruga 1 Qershori
            </span>
          </motion.div>

          {/* Main Title — Large all-caps block with mobile-safe scaling */}
          <motion.div variants={item} className="mb-5 sm:mb-6">
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-slate-900 leading-[0.95] tracking-tight">
              KLINIKA
            </h1>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.95] tracking-tight bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 bg-clip-text text-transparent pb-2">
              KASMOLLARI
            </h1>
          </motion.div>

          {/* Tagline & Subtitle */}
          <motion.div variants={item} className="mb-8 sm:mb-9 max-w-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-teal-700 font-display font-medium mb-2.5 sm:mb-3">
              {t.hero.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center max-w-md sm:max-w-none">
            <a href="https://wa.me/355692332227" target="_blank" rel="noreferrer" className="btn-primary text-sm sm:text-base text-center">
              {t.hero.cta1}
            </a>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}
                    className="btn-outline text-sm sm:text-base text-center">
              {t.hero.cta2}
            </button>
          </motion.div>

          {/* Counter Stats strip */}
          <motion.div variants={item} className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-12 pt-6 sm:pt-8 border-t border-teal-500/15">
            {([['5000+', t.about.stats.patients],['15+',t.about.stats.years],['3',t.about.stats.specialists]] as [string,string][]).map(([val,lbl])=>(
              <div key={lbl} className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-teal-600">
                  {val}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider sm:tracking-widest mt-1 font-medium">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs tracking-widest uppercase font-medium">
        <span>{t.hero.scroll}</span>
        <motion.div animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.5}}>
          <ChevronDown size={18} className="text-teal-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
