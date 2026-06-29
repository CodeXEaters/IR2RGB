import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Activity,
  Aperture,
  ArrowDown,
  BarChart3,
  BrainCircuit,
  Eye,
  Globe2,
  ImageUp,
  Layers2,
  Layers3,
  LocateFixed,
  Radar,
  Satellite,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  UploadCloud,
  Zap,
  Maximize2,
  CheckCircle2
} from 'lucide-react'
import earthImage from './assets/earth-space.jpeg'

const navItems = ['Home', 'Technology', 'Pipeline', 'Metrics', 'Demo']

const storySteps = [
  { title: 'Infrared Telemetry Acquisition', icon: Aperture, text: 'Electro-optical instrumentation captures non-visible radiation signature patterns across designated orbital sectors.' },
  { title: 'Neural Signal Conditioning', icon: Sparkles, text: 'Advanced denoising protocols and resolution augmentation restore critical operational intelligence from degraded sensor data.' },
  { title: 'Cognitive Scene Analysis', icon: BrainCircuit, text: 'Machine reasoning architecture classifies terrain topology, infrastructure vectors, hydrology, atmospheric phenomena, and strategic assets.' },
  { title: 'Photometric Synthesis', icon: Eye, text: 'Intelligent colorization translates infrared radiance signatures into visual spectral representation for rapid human comprehension.' },
  { title: 'Target Acquisition Protocol', icon: ScanSearch, text: 'Precision detection isolates operational targets rendering them traceable, quantifiable, and mission-actionable.' }
]

const pipelineNodes = [
  ['Orbital Telemetry Ingestion', 'Receives calibrated radiometric bands and geospatial metadata enabling mission-aware signal processing.', ImageUp],
  ['Resolution Enhancement Protocol', 'Executes advanced neural magnification restoring critical spatial information for precision downstream analysis.', Zap],
  ['Semantic Terrain Classification', 'Algorithms map terrain morphology and atmospheric interferences preceding synthesis operations.', Layers3],
  ['Visible Spectrum Synthesis', 'Neural translation engines reconstruct infrared intensity into perceptible visible spectral representation.', Aperture],
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

function ImageModal({ image, onClose }) {
  if (!image) return null

  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="image-modal-backdrop" onClick={onClose} />
      <div className="image-modal-content glass-card">
        <button type="button" className="image-modal-close" onClick={onClose} aria-label="Close preview">
          <Maximize2 className="h-4 w-4 rotate-45" />
        </button>
        <img src={image.src} alt={image.alt} className="image-modal-img" />
        <div className="image-modal-footer">
          <span>{image.title}</span>
          <span>{image.description}</span>
        </div>
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
            Converting Infrared Satellite Telemetry Into Mission-Critical Operational Intelligence
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-3xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl" style={{ letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(245, 211, 138, 0.1)' }}>
            Penetrating the Infrared Veil
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} className="mt-6 text-xl font-medium text-amber-100 sm:text-2xl" style={{ letterSpacing: '0.5px' }}>
            Advanced Infrared-to-Visible Spectrum Translation Intelligence System
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }} className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" style={{ letterSpacing: '0.3px' }}>
            Elevate degraded infrared satellite acquisition into crystalline RGB intelligence matrices enabling tactical awareness, target identification, and strategic operational planning across orbital observation sectors.
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
        <h2>Ascending from infrared obscurity into crystalline operational lucidity.</h2>
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
        <h2>Navigate the infrared-to-visible spectrum conversion</h2>
      </FadeIn>
      <FadeIn className="mt-12">
        <div className="comparison relative mx-auto h-[520px] max-w-5xl overflow-hidden rounded-[30px] border border-white/12 shadow-panel">
          <div className="absolute inset-0 ir-layer" />
          <div className="absolute inset-0 rgb-layer" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
          <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100 backdrop-blur-xl">Infrared Input</span>
          <span className="absolute right-5 top-5 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur-xl">Synthesized Spectrum</span>
          <div className="absolute bottom-5 left-1/2 z-20 w-[min(520px,calc(100%-40px))] -translate-x-1/2 rounded-full border border-white/12 bg-slate-950/50 px-5 py-4 backdrop-blur-xl">
            <input aria-label="Before after image comparison" type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="w-full accent-amber-200" />
          </div>
          <div className="absolute inset-y-0 z-10 w-1 bg-amber-100 shadow-[0_0_28px_rgba(251,191,36,0.75)]" style={{ left: `${position}%` }} />
        </div>
      </FadeIn>
    </section>
  )
}





function AnimatedCounter({ target, decimals = 0, duration = 1400, suffix = '' }) {
  const [value, setValue] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return undefined

    let start = null
    let animationFrame
    const tick = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const current = target * easedProgress
      setValue(Number(current.toFixed(decimals)))
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }
    animationFrame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [target, decimals, duration, isInView])

  return <span ref={counterRef}>{value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>
}

function MetricCard({ icon: Icon, title, value, unit, description, color, progress, index }) {
  return (
    <motion.div
      className="pipeline-node metric-card"
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, scale: 1.008, boxShadow: `0 28px 90px rgba(${color}, 0.2)` }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
      style={{ '--metric-rgb': color, borderColor: `rgba(${color}, 0.34)` }}
    >
      <span className="pipeline-node-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="pipeline-node-icon metric-icon" style={{ color: `rgb(${color})`, boxShadow: `0 0 28px rgba(${color}, 0.18)` }}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="pipeline-node-title">{title}</h3>
      <p className="metric-value">
        {typeof value === 'number' ? <AnimatedCounter target={value} decimals={title === 'SSIM' ? 4 : title === 'MAE' ? 6 : 3} suffix={unit ? '' : ''} /> : value}
        {unit && <span className="metric-unit">{unit}</span>}
      </p>
      <div className="metric-progress-bar">
        <motion.div
          className="metric-progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.15, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, rgba(${color},0.98), rgba(${color},0.48))`, boxShadow: `0 0 16px rgba(${color},0.5)` }}
        />
      </div>
      <p className="pipeline-node-detail metric-description">{description}</p>
    </motion.div>
  )
}

function EvaluationMetrics() {
  const metrics = [
    {
      icon: BarChart3,
      title: 'PSNR',
      value: 33.941,
      unit: 'dB',
      description: 'Measures reconstruction quality between generated and reference images. Higher values indicate better fidelity.',
      color: '96, 165, 250',
      progress: 86
    },
    {
      icon: Layers3,
      title: 'SSIM',
      value: 0.9275,
      unit: '',
      description: 'Evaluates structural similarity. A value close to 1 indicates excellent preservation of scene structure.',
      color: '16, 185, 129',
      progress: 93
    },
    {
      icon: Target,
      title: 'MAE',
      value: 0.015302,
      unit: '',
      description: 'Represents pixel-wise reconstruction error. Lower values indicate greater accuracy.',
      color: '249, 115, 22',
      progress: 78
    },
    {
      icon: Zap,
      title: 'Super Resolution',
      value: 'EDSR \u00d72',
      unit: '',
      description: 'AI-powered super-resolution model used to enhance spatial detail before colorization.',
      color: '167, 139, 250',
      progress: 88
    },
    {
      icon: Sparkles,
      title: 'Image Enhancement',
      value: 'CLAHE + Adaptive Sharpening',
      unit: '',
      description: 'Contrast enhancement and adaptive sharpening improve visibility of fine image details.',
      color: '56, 189, 248',
      progress: 84
    }
  ]

  const summaryItems = [
    'High Reconstruction Quality',
    'Excellent Structural Preservation',
    'Low Reconstruction Error',
    'Enhanced Spatial Details',
    'Suitable for Real-World Remote Sensing Applications'
  ]

  return (
    <section id="metrics" className="section-shell evaluation-shell">
      <div className="metric-particles" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 23) % 100}%`,
              top: `${(index * 37) % 100}%`,
              animationDelay: `${index * 0.35}s`,
              animationDuration: `${5 + (index % 4)}s`
            }}
          />
        ))}
      </div>
      <FadeIn className="section-heading">
        <span>Evaluation Metrics</span>
        <h2>Performance indicators for infrared-to-RGB synthesis.</h2>
      </FadeIn>
      <FadeIn className="mt-12">
        <div className="pipeline-console evaluation-console">
          <div className="pipeline-console-top evaluation-console-top">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/70">Live Evaluation Matrix</p>
              <h3>Model validation telemetry</h3>
            </div>
            <div className="pipeline-status">
              <span />
              Metrics verified
            </div>
          </div>
          <div className="pipeline-strip metrics-grid">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.title} {...metric} index={index} />
            ))}
          </div>
          <motion.div
            className="evaluation-summary"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="summary-header">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/70">System Insight</p>
                <h3>Pipeline Performance Summary</h3>
                <p className="summary-copy">System-level indicators supporting deployment confidence.</p>
              </div>
              <div className="summary-accent" />
            </div>
            <div className="summary-chip-grid">
              {summaryItems.map((item, index) => (
                <motion.span
                  key={item}
                  className="summary-chip"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  )
}

function Demo() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [pipelineStage, setPipelineStage] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Awaiting infrared image upload')
  const [selectedImage, setSelectedImage] = useState(null)
  const timerRefs = useRef([])

  const pipelineSteps = [
    'Reading infrared image',
    'Running colorization model',
    'Applying super resolution',
    'Enhancing contrast',
    'Applying adaptive sharpening',
    'Finalizing enhanced RGB output'
  ]

  const cards = [
    {
      title: 'Input IR',
      description: 'Original infrared capture received from the satellite feed.',
      src: preview,
      alt: 'Uploaded infrared image preview',
      style: 'grayscale contrast-125',
      note: 'Original infrared input'
    },
    {
      title: 'Ground Truth RGB',
      description: 'Reference RGB scene for dataset or demo comparison mode.',
      src: preview,
      alt: 'Ground truth reference image',
      style: 'saturate-125 contrast-110',
      note: 'Dataset reference only'
    },
    {
      title: 'Predicted RGB',
      description: 'U-Net model output from infrared-to-visible spectrum synthesis.',
      src: preview,
      alt: 'Predicted RGB output',
      style: 'saturate-125 contrast-125 brightness-110',
      note: 'Neural synthesis result'
    },
    {
      title: 'Enhanced RGB',
      description: 'Final enhanced result after super-resolution, CLAHE, and sharpening.',
      src: preview,
      alt: 'Enhanced RGB output',
      style: 'saturate-150 contrast-135 brightness-115',
      note: 'Final output enhancement'
    }
  ]

  function handleFile(selected) {
    if (!selected) return
    timerRefs.current.forEach(clearTimeout)
    timerRefs.current = []

    setFile(selected)
    const objectUrl = URL.createObjectURL(selected)
    setPreview(objectUrl)
    setProcessing(true)
    setPipelineStage(0)
    setStatusMessage(pipelineSteps[0])

    pipelineSteps.forEach((step, index) => {
      timerRefs.current.push(
        window.setTimeout(() => {
          setPipelineStage(index)
          setStatusMessage(step)
          if (index === pipelineSteps.length - 1) {
            setProcessing(false)
            timerRefs.current.push(
              window.setTimeout(() => setStatusMessage('Processing complete'), 400)
            )
          }
        }, index * 900)
      )
    })
  }

  useEffect(() => {
    return () => timerRefs.current.forEach(clearTimeout)
  }, [])

  return (
    <section id="demo" className="section-shell">
      <FadeIn className="section-heading">
        <span>Operational Simulator</span>
        <h2>Transmit infrared acquisition and observe synthesized RGB intelligence output.</h2>
      </FadeIn>
      <FadeIn className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <label className="upload-zone flex min-h-80 cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-amber-200/38 bg-amber-200/[0.045] p-8 text-center shadow-glow backdrop-blur-2xl">
          <UploadCloud className="mb-5 h-12 w-12 text-amber-100" />
          <span className="text-xl font-semibold text-white">Upload Infrared Satellite Image</span>
          <span className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Choose an IR capture to run through the colorization and enhancement pipeline.</span>
          <span className="mt-2 max-w-sm text-xs text-amber-200/70">Supports dataset demo imagery and production IR inputs.</span>
          <input type="file" accept="image/*" className="sr-only" onChange={(event) => handleFile(event.target.files?.[0])} />
        </label>
        <div className="glass-card p-6">
          <div className="demo-status-panel glass-card mb-6 flex flex-col gap-5 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/80">Processing Status</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{processing ? 'Running inference' : 'Standby'}</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100">
                <span className={`h-2.5 w-2.5 rounded-full ${processing ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                {processing ? 'Active' : 'Idle'}
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-300">{statusMessage}</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${((pipelineStage + 1) / pipelineSteps.length) * 100}%` }} />
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              {pipelineSteps.map((step, idx) => (
                <span key={step} className={idx <= pipelineStage ? 'status-chip active' : 'status-chip'}>
                  {step}
                </span>
              ))}
            </div>
          </div>
          <div className="demo-grid">
            {cards.map((card) => (
              <button
                type="button"
                key={card.title}
                className="demo-card"
                onClick={() => preview && setSelectedImage(card)}
                disabled={!preview}
              >
                <div className="demo-card-header">
                  <div>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                    <p className="text-xs text-slate-400">{card.note}</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Preview</div>
                </div>
                <div className="demo-card-image-wrapper">
                  {card.src ? (
                    <img src={card.src} alt={card.alt} className={`demo-card-image ${card.style}`} />
                  ) : (
                    <div className="demo-card-empty">Upload an image to display</div>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
              </button>
            ))}
          </div>
          <div className="demo-pipeline mt-6">
            <div className="pipeline-row">
              <span>IR Image</span>
              <span>U-Net Colorization</span>
              <span>Super Resolution</span>
              <span>CLAHE</span>
              <span>Adaptive Sharpening</span>
              <span>Enhanced RGB</span>
            </div>
          </div>
        </div>
      </FadeIn>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
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
          <p className="text-lg font-semibold text-slate-300">DIVYA VISION Infrared Intelligence Command</p>
          <p className="mt-2 max-w-xl text-sm text-slate-400">Transcending infrared obscurity through advanced synthesis, delivering crystalline mission-critical satellite operational intelligence.</p>
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
        <EvaluationMetrics />
        <Footer />
      </div>
    </main>
  )
}
