import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './App.css'

const projects = [
  ['01','SOLAR-POWERED\nCOLD-CHAIN','DIGITAL TWIN / IOT / CLOUD','IoT telemetry and a digital twin for predicting cold-chain spoilage risk.','ESP32 · MQTT · AWS IoT Core · EKS · Docker · Python','IOT'],
  ['02','AUTONOMOUS\nINSURANCE AGENT','AI / MICROSERVICES / CLOUD','A six-stage claims decision pipeline built and tested under real cloud infrastructure constraints.','Python · Docker · AWS · REST APIs · Microservices','AI'],
  ['03','TIPY 4.0','PRODUCT ENGINEERING / WEB','A production textile design platform where canvas rendering, data reliability and cloud workflows meet.','React · TypeScript · Electron · MySQL · AWS','TIPY'],
]
const skills = ['AWS','DOCKER','KUBERNETES','CI/CD','PYTHON','TYPESCRIPT','REACT','AI SYSTEMS']

function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#top" onClick={close}>NITHIN<span>.</span>K</a>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        <a href="#work" onClick={close}>WORK</a><a href="#experience" onClick={close}>EXPERIENCE</a><a href="#about" onClick={close}>ABOUT</a><a href="#contact" onClick={close}>CONTACT</a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={22}/> : <Menu size={22}/>}</button>
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><i/> DEVOPS · CLOUD · AI · SOFTWARE</p>
          <h1>BUILDING<br/><span>DIGITAL</span><br/>SYSTEMS<b>.</b></h1>
          <p className="hero-lede">I&apos;m Nithin — an engineer focused on cloud infrastructure, automation and intelligent software that moves from idea to production.</p>
          <div className="hero-actions"><a className="button button-red" href="#work">EXPLORE WORK <ArrowUpRight size={18}/></a><a className="text-link" href="#contact">LET&apos;S CONNECT <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-card"><div className="card-top"><span>01 / ENGINEER</span><span>2026</span></div><div className="monogram">NK</div><div className="card-bottom"><span>SYSTEMS / CLOUD</span><span className="status"><i/> ONLINE</span></div></div><span className="float-label l1">AWS / 01</span><span className="float-label l2">CI/CD / 02</span><span className="float-label l3">AI / 03</span></div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><i/><span>01 — 06</span></div>
      </section>

      <section id="about" className="intro section-pad"><div className="section-label">01 / ABOUT</div><div className="intro-content"><h2>ENGINEERED<br/><em>TO SHIP.</em></h2><div className="intro-text"><p className="large-copy">Not just interfaces. Not just infrastructure. I like the space where products, cloud systems and engineering decisions connect.</p><p>I&apos;m pursuing a B.E. in Electrical &amp; Electronics Engineering while working as a Software Engineer Intern. My work spans production products, AWS architecture, CI/CD, containers and AI-powered systems.</p><a className="text-link" href="#experience">MORE ABOUT ME <ArrowUpRight size={16}/></a></div></div></section>

      <section id="work" className="work section-pad"><div className="section-heading"><div className="section-label">02 / SELECTED WORK</div><p>Real problems. Real systems. Carefully engineered.</p></div><div className="project-list">{projects.map(([num,title,type,desc,stack,core],i)=><article className={'project p'+(i+1)} key={num}><div className="project-index">{num}</div><div className="project-visual"><div className="visual-grid"/><div className="visual-core">{core}</div><span>CASE STUDY ↗</span></div><div className="project-copy"><small>{type}</small><h3>{title.split('\n').map(x=><span key={x}>{x}<br/></span>)}</h3><p>{desc}</p><small className="stack">{stack}</small><button className="circle-link" aria-label="Open project"><ArrowUpRight size={20}/></button></div></article>)}</div></section>

      <section id="experience" className="experience section-pad"><div className="section-label">03 / EXPERIENCE</div><div className="experience-grid"><div><p className="eyebrow"><i/> JUN 2025 — PRESENT</p><h2>PRASKLA<br/><em>TECHNOLOGY</em></h2><p className="role">SOFTWARE ENGINEER INTERN</p></div><div className="experience-body"><p className="large-copy">Owning architecture, debugging and infrastructure decisions across three live company products.</p><div className="metrics"><div><strong>03</strong><span>LIVE PRODUCTS</span></div><div><strong>10K+</strong><span>DAILY RECORDS</span></div><div><strong>06</strong><span>AWS SERVICES</span></div></div><p>From migrating an ERP workload to AWS EC2/RDS and owning GitHub Actions releases, to designing cloud infrastructure and leading a serverless migration — the work is grounded in shipping reliable systems.</p></div></div></section>

      <section className="capabilities section-pad"><div className="section-label">04 / CAPABILITIES</div><div className="capability-wrap">{skills.map((x,i)=><span className={i%3===0?'capability accent':'capability'} key={x}>{x}</span>)}</div><p className="capability-note">AWS · Azure · Docker · Kubernetes · GitHub Actions · CloudWatch · Grafana · Python · Bash · SQL · MongoDB · PostgreSQL · React · TypeScript</p></section>

      <section className="recognition section-pad"><div className="section-label">05 / RECOGNITION</div><div className="recognition-grid"><div><strong>TOP 50</strong><span>VIRTUSA ENGINEERING<br/>EXCELLENCE SCHOLAR</span></div><div><strong>TOP 100</strong><span>COGNIZANT<br/>TECHNOVERSE 2026</span></div><div><strong>FINALIST</strong><span>METACODE · IIT<br/>KHARAGPUR COMPOSIT</span></div><div><strong>GRADE A</strong><span>NCC C CERTIFICATE<br/>ARMY WING</span></div></div></section>

      <section id="contact" className="contact section-pad"><div className="section-label">06 / CONTACT</div><div className="contact-content"><p className="eyebrow"><i/> HAVE A SYSTEM TO BUILD?</p><h2>LET&apos;S MAKE<br/><span>IT REAL.</span></h2><a className="contact-mail" href="mailto:nithinofficial47@gmail.com">nithinofficial47@gmail.com <ArrowUpRight size={28}/></a></div></section>
    </main>
    <footer className="footer section-pad"><span>© 2026 NITHIN K.</span><span>DEVOPS / CLOUD / SOFTWARE</span><div><a href="https://github.com/NITHIN4747" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/nithink47" target="_blank" rel="noreferrer">LINKEDIN</a></div></footer>
  </div>
}
export default App
