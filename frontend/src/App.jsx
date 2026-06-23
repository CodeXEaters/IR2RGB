import { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Activity,
  Aperture,
  ArrowDown,
  BrainCircuit,
  Eye,
  Globe2,
  ImageUp,
  Layers3,
  LocateFixed,
  Radar,
  Satellite,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Zap
} from 'lucide-react'
import earthImage from './assets/earth-space.jpeg'

const navItems = ['Home', 'Technology', 'Pipeline', 'Demo']

const storySteps = [
  { title: 'Thermal Telemetry Acquisition', icon: Aperture, text: 'Electro-optical instrumentation captures non-visible radiation signature patterns across designated orbital sectors.' },
  { title: 'Neural Signal Conditioning', icon: Sparkles, text: 'Advanced denoising protocols and resolution augmentation restore critical operational intelligence from degraded sensor data.' },
  { title: 'Cognitive Scene Analysis', icon: BrainCircuit, text: 'Machine reasoning architecture classifies terrain topology, infrastructure vectors, hydrology, atmospheric phenomena, and strategic assets.' },
  { title: 'Photometric Synthesis', icon: Eye, text: 'Intelligent colorization translates thermal radiance signatures into visual spectral representation for rapid human comprehension.' },
  { title: 'Target Acquisition Protocol', icon: ScanSearch, text: 'Precision detection isolates operational targets rendering them traceable, quantifiable, and mission-actionable.' }
]

const pipelineNodes = [
  ['Orbital Telemetry Ingestion', 'Receives calibrated radiometric bands and geospatial metadata enabling mission-aware signal processing.', ImageUp],
  ['Resolution Enhancement Protocol', 'Executes advanced neural magnification restoring critical spatial information for precision downstream analysis.', Zap],
  ['Semantic Terrain Classification', 'Algorithms map terrain morphology and atmospheric interferences preceding synthesis operations.', Layers3],
  ['Visible Spectrum Synthesis', 'Neural translation engines reconstruct thermal intensity into perceptible visible spectral representation.', Aperture],
  ['Target Detection & Tracking', 'Precision identification of strategic vectors including infrastructure, vessels, transport routes, and anomalies.', LocateFixed],
  ['Mission Intelligence Package', 'Delivers synthesized RGB imagery, detection matrices, confidence metrics, and operational overlays.', ShieldCheck]
]







function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 150 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2.2 + 0.4}px`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 4 + 6}s`,
        opacity: Math.random() * 0.6 + 0.3
      })),
    []
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(255,255,255,${star.opacity})`
            }}
            animate={{
              opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: parseFloat(star.duration),
              delay: parseFloat(star.delay),
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  )
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 1.8 + 0.8}px`,
        delay: `${Math.random() * 5}s`
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-[-20%] animate-stars opacity-50">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            style={{ left: star.left, top: star.top, width: star.size, height: star.size, animationDelay: star.delay }}
          />
        ))}
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="nav-shell">
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <span className="nav-brand-mark">
            <Satellite className="h-3.5 w-3.5" />
          </span>
          DIVYA VISION
        </a>
        <div className="nav-menu">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="#demo" className="nav-cta">
          Launch Demo
        </a>
      </div>
    </nav>
  )
}

function OrbitalSatellite() {
  return (
    <motion.div
      className="orbital-satellite hidden md:block"
      animate={{ y: [0, -18, 0], x: [0, 12, 0], rotate: [0, 1.5, 0] }}
      transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut' }}
    >
      <div className="orbit-ring" />
      <div className="signal-arc signal-arc-one" />
      <div className="signal-arc signal-arc-two" />
      <div className="satellite-craft">
        <span className="solar-panel left-panel" />
        <span className="sat-body">
          <span className="sat-lens" />
        </span>
        <span className="solar-panel right-panel" />
        <span className="sat-antenna" />
      </div>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.img src={earthImage} alt="Earth from space" className="absolute inset-0 h-full w-full object-cover" style={{ scale, y, filter: 'brightness(1.08)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(245,158,11,0.1),transparent_28%),radial-gradient(circle_at_42%_18%,rgba(168,85,247,0.08),transparent_32%),linear-gradient(105deg,rgba(0,0,0,0.96)_0%,rgba(8,8,12,0.72)_48%,rgba(0,0,0,0.3)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/20 to-black/95" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 max-w-sm h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent blur-sm" />
      <Stars />
      <div className="grid-overlay absolute inset-0 opacity-10" />
      <div className="absolute left-[12%] top-[24%] h-40 w-40 rounded-full bg-amber-300/8 blur-3xl" />
      <div className="absolute bottom-[18%] right-[16%] h-52 w-52 rounded-full bg-violet-400/8 blur-3xl" />
      <OrbitalSatellite />
      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1180px,calc(100%-32px))] items-center pb-20 pt-28">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-sm text-amber-100 backdrop-blur-xl" style={{ letterSpacing: '0.1em' }}>
            <Radar className="h-4 w-4" />
            Converting Thermal Satellite Telemetry Into Mission-Critical Operational Intelligence
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-3xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl" style={{ letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(245, 211, 138, 0.1)' }}>
            Penetrating the Thermal Veil
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} className="mt-6 text-xl font-medium text-amber-100 sm:text-2xl" style={{ letterSpacing: '0.5px' }}>
            Advanced Thermal-to-Visible Spectrum Translation Intelligence System
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }} className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" style={{ letterSpacing: '0.3px' }}>
            Elevate degraded thermal satellite acquisition into crystalline RGB intelligence matrices enabling tactical awareness, target identification, and strategic operational planning across orbital observation sectors.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.46 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#demo" className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-100 px-6 py-4 font-semibold text-black shadow-lg transition hover:bg-white hover:shadow-xl hover:-translate-y-0.5">
              <UploadCloud className="h-5 w-5 transition group-hover:-translate-y-0.5" />
              Initiate Telemetry Upload
            </a>
            <a href="#technology" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 hover:border-white/20">
              Access Technology Blueprint
              <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProblemStory() {
  return (
    <section id="technology" className="section-shell">
      <FadeIn className="section-heading">
        <span>Mission Analysis Protocol</span>
        <h2>Ascending from thermal obscurity into crystalline operational lucidity.</h2>
      </FadeIn>
      <div className="story-rail mt-12">
        {storySteps.map((step, index) => {
          const Icon = step.icon
          return (
            <FadeIn key={step.title} delay={index * 0.07} className="relative min-w-0">
              <div className="story-step group">
                <div className="flex items-center justify-between gap-4">
                  <span className="story-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="story-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

function Pipeline() {
  const [active, setActive] = useState(0)
  return (
    <section id="pipeline" className="section-shell">
      <FadeIn className="section-heading">
        <span>Neural Processing Chain</span>
        <h2>Precision signal architecture engineered for velocity, context synthesis, and confidence matrices.</h2>
      </FadeIn>
      <FadeIn className="mt-12">
        <div className="pipeline-console">
          <div className="pipeline-console-top">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/70">Active Processing Vector</p>
              <h3>{pipelineNodes[active][0]}</h3>
            </div>
            <div className="pipeline-status">
              <span />
              Neural stack online
            </div>
          </div>
          <div className="pipeline-active-panel">
            <div className="pipeline-active-icon">
              {(() => {
                const ActiveIcon = pipelineNodes[active][2]
                return <ActiveIcon className="h-7 w-7" />
              })()}
            </div>
            <p>{pipelineNodes[active][1]}</p>
          </div>
          <div className="pipeline-strip">
            {pipelineNodes.map(([title, detail, Icon], index) => (
              <button
                key={title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`pipeline-node ${active === index ? 'is-active' : ''}`}
              >
                <span className="pipeline-node-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="pipeline-node-icon">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="pipeline-node-title">{title}</span>
                <span className="pipeline-node-detail">{detail}</span>
              </button>
            ))}
          </div>
          <div className="pipeline-progress" style={{ '--progress-width': `${((active + 1) / pipelineNodes.length) * 100}%` }} />
        </div>
      </FadeIn>
    </section>
  )
}

function Comparison() {
  const [position, setPosition] = useState(52)

  return (
    <section className="section-shell">
      <FadeIn className="section-heading">
        <span>Signal Transformation</span>
        <h2>Navigate the thermal-to-visible spectrum conversion</h2>
      </FadeIn>
      <FadeIn className="mt-12">
        <div className="comparison relative mx-auto h-[520px] max-w-5xl overflow-hidden rounded-[30px] border border-white/12 shadow-panel">
          <div className="absolute inset-0 ir-layer" />
          <div className="absolute inset-0 rgb-layer" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
          <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-sm font-semibold text-amber-100 backdrop-blur-xl">Thermal Input</span>
          <span className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur-xl">Synthesized Spectrum</span>
          <div className="absolute bottom-5 left-1/2 z-20 w-[min(520px,calc(100%-40px))] -translate-x-1/2 rounded-full border border-white/12 bg-slate-950/50 px-5 py-4 backdrop-blur-xl">
            <input aria-label="Before after image comparison" type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="w-full accent-amber-200" />
          </div>
          <div className="absolute inset-y-0 z-10 w-1 bg-amber-100 shadow-[0_0_28px_rgba(251,191,36,0.75)]" style={{ left: `${position}%` }} />
        </div>
      </FadeIn>
    </section>
  )
}





function Demo() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [processing, setProcessing] = useState(false)

  function handleFile(selected) {
    if (!selected) return
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
    setProcessing(true)
    window.setTimeout(() => setProcessing(false), 1800)
  }

  return (
    <section id="demo" className="section-shell">
      <FadeIn className="section-heading">
        <span>Operational Simulator</span>
        <h2>Transmit thermal acquisition and observe synthesized RGB intelligence output.</h2>
      </FadeIn>
      <FadeIn className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <label className="upload-zone flex min-h-80 cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-amber-200/38 bg-amber-200/[0.045] p-8 text-center shadow-glow backdrop-blur-2xl">
          <UploadCloud className="mb-5 h-12 w-12 text-amber-100" />
          <span className="text-xl font-semibold text-white">Initiate Thermal Transmission</span>
          <span className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Transmit orbital satellite sectors to activate neural synthesis pipeline and observe RGB intelligence matrices.</span>
          <span className="mt-2 max-w-sm text-xs text-amber-200/70">Landsat 8/9 imagery (B5, B6, B7 bands or scene package)</span>
          <input type="file" accept="image/*" className="sr-only" onChange={(event) => handleFile(event.target.files?.[0])} />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="glass-card overflow-hidden p-4">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-100"><Activity className="h-4 w-4" /> Thermal Acquisition</p>
            <div className="demo-frame">{preview ? <img src={preview} alt={file?.name || 'Uploaded infrared preview'} className="h-full w-full object-cover grayscale contrast-125" /> : <div className="ir-layer h-full w-full" />}</div>
          </div>
          <div className="glass-card overflow-hidden p-4">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-100"><Globe2 className="h-4 w-4" /> Synthesized Output</p>
            <div className="demo-frame relative">
              {preview ? <img src={preview} alt="Simulated synthesized RGB output" className="h-full w-full object-cover saturate-150 contrast-110 hue-rotate-15" /> : <div className="rgb-layer h-full w-full" />}
              {processing && <div className="absolute inset-0 grid place-items-center bg-black/65 text-sm font-semibold text-amber-100 backdrop-blur-sm">Executing neural synthesis protocol...</div>}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}



function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 px-6 py-14">
      <svg className="absolute inset-0 h-full w-full opacity-15" aria-hidden="true">
        <line x1="8%" y1="70%" x2="24%" y2="32%" stroke="rgba(251,191,36,.35)" />
        <line x1="24%" y1="32%" x2="46%" y2="54%" stroke="rgba(168,85,247,.25)" />
        <line x1="46%" y1="54%" x2="72%" y2="26%" stroke="rgba(52,211,153,.25)" />
        <line x1="72%" y1="26%" x2="91%" y2="68%" stroke="rgba(240,171,252,.2)" />
        {[8, 24, 46, 72, 91].map((x, index) => (
          <circle key={x} cx={`${x}%`} cy={index % 2 ? '32%' : '68%'} r="2.5" fill="white" />
        ))}
      </svg>
      <div className="relative mx-auto flex w-[min(1120px,100%)] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-semibold text-slate-300">DIVYA VISION Thermal Intelligence Command</p>
          <p className="mt-2 max-w-xl text-sm text-slate-400">Transcending thermal obscurity through advanced synthesis, delivering crystalline mission-critical satellite operational intelligence.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-void text-white">
      <StarsBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemStory />
        <Pipeline />
        <Comparison />
        <Demo />
        <Footer />
      </div>
    </main>
  )
}
