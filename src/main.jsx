import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Server, Container, Cloud, Menu } from 'lucide-react';
import './style.css';

const projects = [
  { title: 'Two-Tier Flask Application', tech: 'Flask · MySQL · Docker · Docker Compose', desc: 'Containerized two-tier application with service networking and environment-based configuration.', url: 'https://github.com/YASHkalraji/two-tier-flask-app' },
  { title: 'Django Notes Application', tech: 'Django · React · Docker · Nginx', desc: 'Full-stack notes application focused on containerized deployment and reverse-proxy architecture.', url: 'https://github.com/YASHkalraji/django-notes-app' },
  { title: 'Simple Java Docker App', tech: 'Java · Docker', desc: 'Containerization project demonstrating reproducible application builds and deployment.', url: 'https://github.com/YASHkalraji/simple-java-docker' },
];

function App() {
  return <>
    <header><a className="logo" href="#top">YK<span>_</span></a><nav><a href="#about">about</a><a href="#skills">skills</a><a href="#projects">projects</a><a href="#contact">contact</a></nav></header>
    <main id="top">
      <section className="hero">
        <div className="terminal"><div className="bar"><span></span><span></span><span></span><b>yash@portfolio:~</b></div><div className="code"><p><i>$</i> whoami</p><h1>Yash Kalra<span className="cursor">_</span></h1><p className="muted">Cloud Support Engineer → DevOps Engineer</p><p><i>$</i> cat skills.txt</p><div className="tags"><b>Linux</b><b>Docker</b><b>AWS</b><b>Kubernetes</b><b>Git</b><b>Bash</b><b>Python</b></div><p><i>$</i> <span className="typing">building reliable systems...</span></p></div></div>
        <div className="hero-actions"><a className="btn primary" href="#projects">Explore Projects <ExternalLink size={17}/></a><a className="btn" href="https://github.com/YASHkalraji" target="_blank">GitHub <Github size={17}/></a></div>
      </section>
      <section id="about"><div className="eyebrow">01 / ABOUT</div><h2>Keeping systems running.<br/><em>Building what comes next.</em></h2><p className="lead">I am a Cloud Support Engineer with hands-on experience supporting production environments, troubleshooting infrastructure and application issues, and administering Windows and Linux systems. I am building deeper expertise in DevOps, cloud infrastructure, automation, and containerized deployments.</p></section>
      <section id="skills"><div className="eyebrow">02 / TECHNICAL ARSENAL</div><div className="grid skills"><article><Terminal/><h3>Systems</h3><p>Linux · RHEL · Ubuntu · Windows Server · Bash · Storage · LVM</p></article><article><Container/><h3>Containers</h3><p>Docker · Docker Compose · Kubernetes fundamentals · Nginx</p></article><article><Cloud/><h3>Cloud & Automation</h3><p>AWS · Oracle Cloud · Git · Python · n8n · CI/CD learning</p></article><article><Server/><h3>Infrastructure</h3><p>Networking · RDP · Monitoring · Troubleshooting · Production Support</p></article></div></section>
      <section id="projects"><div className="eyebrow">03 / FEATURED PROJECTS</div><h2>Things I've <em>deployed & built.</em></h2><div className="projects">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-no">0{i+1}</div><h3>{p.title}</h3><p className="tech">{p.tech}</p><p>{p.desc}</p><a href={p.url} target="_blank">View repository <ExternalLink size={16}/></a></article>)}</div></section>
      <section id="contact" className="contact"><div className="eyebrow">04 / CONTACT</div><h2>Let's build something<br/><em>reliable.</em></h2><div className="contact-links"><a href="mailto:yashkalra2513@gmail.com"><Mail/> Email</a><a href="https://github.com/YASHkalraji" target="_blank"><Github/> GitHub</a><a href="https://www.linkedin.com/in/yashkalra2513/" target="_blank"><Linkedin/> LinkedIn</a></div></section>
    </main><footer><span>© {new Date().getFullYear()} Yash Kalra</span><span>Built with React + Vite</span></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
