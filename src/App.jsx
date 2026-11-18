import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Cpu, ScanLine, Shield, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 800], [0, 180])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    ['Evolution', 'evolution'],
    ['Technology', 'technology'],
    ['Interface', 'interface'],
    ['Future', 'future'],
  ]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <button className="brand" onClick={() => scrollTo('top')} aria-label="CYBORG home">
          <span className="brand-mark"><span /></span>CYBORG
        </button>
        <div className="nav-links">
          {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
        </div>
        <button className="nav-cta" onClick={() => scrollTo('evolution')}>
          Explore evolution <ArrowUpRight size={15} />
        </button>
        <button className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-noise" />
        <motion.div className="hero-visual" style={{ y: heroY }}>
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="subject-glow" />
          <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=90" alt="Human interacting with advanced technology" />
          <div className="scan-line" />
          <div className="face-target"><span>01</span></div>
        </motion.div>

        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span /> Next evolution / 2026
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
            HUMANITY,<br /><em>UPGRADED.</em>
          </motion.h1>
          <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
            The next evolution isn't biological.<br />It's engineered.
          </motion.p>
        </div>

        <motion.button className="scroll-cue" onClick={() => scrollTo('evolution')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <span>Discover</span><ArrowDown size={18} />
        </motion.button>
        <div className="hero-index"><span>01</span><div><i /></div><span>04</span></div>
      </section>

      <section className="evolution section" id="evolution">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>
          <p className="eyebrow"><span /> 01 — Evolution</p>
          <h2>Beyond the limits<br />of <em>humanity.</em></h2>
        </motion.div>
        <div className="evolution-layout">
          <motion.div className="bio-panel" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="panel-label"><span>Human</span><b>01</b></div>
            <div className="human-figure">
              <div className="head" /><div className="torso" /><div className="arm left" /><div className="arm right" /><div className="scan-grid" />
            </div>
          </motion.div>
          <div className="evolution-copy">
            <p className="copy-index">02 / 04</p>
            <p>We are entering a new era. One where biology and technology converge—not to replace what makes us human, but to extend it.</p>
            <div className="metric-row">
              <div><strong>10×</strong><span>Cognitive<br />processing</span></div>
              <div><strong>0.02<sup>s</sup></strong><span>Neural<br />response</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology section" id="technology">
        <div className="tech-header">
          <p className="eyebrow"><span /> 02 — Technology</p>
          <h2>Engineered for<br /><em>what's next.</em></h2>
        </div>
        <div className="tech-grid">
          {[
            { icon: Cpu, num: '01', title: 'Neural Link', text: 'Direct, bidirectional communication between mind and machine.' },
            { icon: Shield, num: '02', title: 'Adaptive Systems', text: 'Technology that learns, predicts and evolves with every interaction.' },
            { icon: Zap, num: '03', title: 'Augmented Motion', text: 'Strength and precision beyond biological boundaries.' },
          ].map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
              <div className="tech-top"><item.icon size={22} /><span>{item.num}</span></div>
              <div className="tech-icon"><item.icon size={34} strokeWidth={1} /></div>
              <h3>{item.title}</h3><p>{item.text}</p>
              <button aria-label={`Explore ${item.title}`}><ArrowUpRight size={18} /></button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="interface section" id="interface">
        <div className="interface-visual">
          <div className="data-ring ring-a" /><div className="data-ring ring-b" /><div className="data-ring ring-c" />
          <div className="core"><ScanLine size={44} strokeWidth={1} /></div>
          <span className="datum datum-a">N-804</span><span className="datum datum-b">SYNC 99.8</span>
        </div>
        <motion.div className="interface-copy" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="eyebrow"><span /> 03 — Interface</p>
          <h2>A seamless<br /><em>connection.</em></h2>
          <p>Technology disappears when the interface becomes instinct. No barriers. No latency. Only intent and action.</p>
          <button className="text-link" onClick={() => scrollTo('future')}>Enter the interface <ArrowUpRight size={16} /></button>
        </motion.div>
      </section>

      <section className="future section" id="future">
        <div className="future-grid" />
        <motion.div className="future-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow"><span /> 04 — The future</p>
          <h2>The future isn't<br />something we wait for.</h2>
          <p>It's something we build.</p>
          <button className="future-cta" onClick={() => scrollTo('top')}>Join the evolution <ArrowUpRight size={17} /></button>
        </motion.div>
        <footer>
          <div className="brand footer-brand"><span className="brand-mark"><span /></span> CYBORG</div>
          <p>Humanity, upgraded.</p><span>© 2026 CYBORG SYSTEMS</span>
        </footer>
      </section>
    </main>
  )
}

export default App
