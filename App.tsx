
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  ChevronRight,
  HeartPulse,
  Bot,
  Music,
  MonitorPlay,
  ExternalLink,
  Sparkles,
  Code,
  Database,
  Brain
} from 'lucide-react';
import { PROJECTS, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-gray-600 hover:text-indigo-600 font-medium transition-all duration-300 relative group"
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse size={40} strokeWidth={1.5} />;
      case 'Bot': return <Bot size={40} strokeWidth={1.5} />;
      case 'Music': return <Music size={40} strokeWidth={1.5} />;
      case 'MonitorPlay': return <MonitorPlay size={40} strokeWidth={1.5} />;
      default: return null;
    }
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={32} strokeWidth={1.5} />;
      case 'Database': return <Database size={32} strokeWidth={1.5} />;
      case 'Brain': return <Brain size={32} strokeWidth={1.5} />;
      default: return null;
    }
  };

  const highlights = [
    "Artificial Intelligence", 
    "Machine Learning", 
    "Data Analysis", 
    "Data Science",
    "Neural Networks",
    "Predictive Modeling",
    "NLP Systems",
    "Cloud Computing"
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden text-gray-800 selection:bg-indigo-100 selection:text-indigo-700">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-pastel-gradient opacity-60"></div>
      <div className="fixed top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full animated-glow -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-purple-100/40 rounded-full animated-glow -z-10" style={{ animationDelay: '3s' }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-sm border-b border-white/40' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tighter">
            Alina<span className="text-gray-900">Shibu.</span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <a href="#contact" className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300">
              Contact
            </a>
          </div>

          <button 
            className="md:hidden text-gray-700 p-2 glass rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass absolute top-[calc(100%+0.5rem)] left-4 right-4 p-8 flex flex-col gap-6 border border-white/40 shadow-xl rounded-2xl animate-in fade-in slide-in-from-top-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-indigo-700 font-semibold text-sm border border-indigo-100/50">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Engineering Graduate • Artificial Intelligence Focus
            </div>
            
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight leading-[0.9]">
                Alina <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">Shibu</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-600 font-medium tracking-tight">
                AI & ML Enthusiast | Data Analysis | Computer Science Engineer
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light">
              Academically diligent software engineering student with a deep interest in Artificial Intelligence and Machine Learning. Adept problem solver and quick learner, passionate about embracing new challenges and continuously expanding technical knowledge.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#projects" className="group px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">
                Explore Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-10 py-5 glass text-gray-700 rounded-2xl font-bold border border-white/50 hover:bg-white/80 transition-all duration-300">
                Get in Touch
              </a>
            </div>

            <div className="flex gap-10 text-gray-400 pt-8 border-t border-white/20 w-max">
              <a href="https://github.com/alina518" target="_blank" className="hover:text-gray-900 transition-all flex items-center gap-2">
                <Github size={20} /> <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/alina-shibu-a4291b245/" target="_blank" className="hover:text-indigo-600 transition-all flex items-center gap-2">
                <Linkedin size={20} /> <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Highlights */}
      <div className="py-12 glass border-y border-white/20 overflow-hidden marquee-container">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...highlights, ...highlights].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-gray-400 font-bold text-xs tracking-[0.4em] uppercase">
              <Sparkles size={14} className="text-indigo-400" />
              <span className="hover:text-indigo-600 transition-colors cursor-default">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold">The Profile</h2>
                <div className="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
              </div>
              
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  As an academically diligent software engineering student, I have developed a deep fascination with how intelligent systems can reshape our world. My journey in Computer Science is fueled by a relentless curiosity and a passion for Artificial Intelligence, Machine Learning, and Data Analysis.
                </p>
                <p className="bg-white/40 p-10 rounded-[2.5rem] border border-white/60 italic font-medium text-gray-700 shadow-sm relative">
                  <span className="absolute top-4 left-6 text-6xl text-indigo-100 font-serif">"</span>
                  I believe that the intersection of data and intelligence holds the key to solving some of our most pressing global challenges. My goal is to be at the forefront of this innovation.
                </p>
                <p>
                  My mindset is research-inclined; I don't just use tools, I strive to understand the underlying mathematical and architectural foundations of AI systems. This curiosity drives me to continuously expand my technical horizons.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-indigo-600">
                Education
              </h3>
              <div className="space-y-10 relative">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="glass p-10 rounded-[3rem] border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="flex justify-between items-start mb-4 gap-6">
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{edu.degree}</h4>
                      <span className="text-[10px] font-bold px-4 py-2 bg-white text-indigo-600 rounded-full shadow-sm border border-indigo-50 uppercase tracking-widest shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-lg text-gray-500 font-medium">
                       {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl font-bold mb-6">Expertise</h2>
            <div className="h-1.5 w-24 bg-indigo-600 rounded-full mx-auto"></div>
            <p className="mt-8 text-gray-500 max-w-xl mx-auto text-lg font-light">
              A curated stack of technical capabilities spanning software engineering and data intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="glass p-12 rounded-[4rem] border border-white/60 flex flex-col items-center text-center group hover:bg-white/80 transition-all duration-500">
                <div className="w-20 h-20 bg-indigo-50 rounded-3xl mb-8 flex items-center justify-center text-indigo-600 group-hover:rotate-12 transition-transform duration-500">
                   {getSkillIcon(cat.icon)}
                </div>
                <h3 className="text-3xl font-extrabold mb-10 text-gray-900">{cat.title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="px-6 py-3 bg-white shadow-sm border border-indigo-50 rounded-2xl text-xs font-bold text-indigo-700 tracking-wider uppercase hover:border-indigo-200 hover:shadow-md transition-all cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-6">Experience</h2>
            <div className="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
          </div>

          <div className="max-w-5xl">
            <div className="glass p-12 md:p-20 rounded-[4rem] border border-white shadow-xl group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-12 border-b border-indigo-100 pb-12">
                <div className="space-y-2">
                  <h3 className="text-4xl font-extrabold text-gray-900">Intern – Bharat Electronics</h3>
                  <p className="text-indigo-600 text-xl font-bold tracking-tight">
                    Defense & Electronics Systems • Bangalore, India
                  </p>
                </div>
                <div className="px-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-bold uppercase tracking-[0.3em] shadow-xl">
                  Industrial Training
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 text-gray-600 leading-relaxed text-xl font-light">
                <div className="space-y-8">
                  <p className="font-medium text-gray-800 italic">
                    Acquired hands-on experience in one of the most prestigious industrial environments in the region.
                  </p>
                  <p>
                    Exposure to real-world defense electronics manufacturing processes provided a unique perspective on hardware-software synergy and quality assurance.
                  </p>
                </div>
                <ul className="space-y-6">
                  {[
                    "Lifecycle exposure of large-scale systems",
                    "Engineering standards & industrial protocols",
                    "Multidisciplinary team collaboration",
                    "Real-time technical systems monitoring"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl font-bold mb-6">Projects</h2>
            <div className="h-1.5 w-24 bg-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass rounded-[4rem] p-12 md:p-16 border border-white/60 flex flex-col hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-700 hover:-translate-y-4">
                <div className="flex-grow space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500">
                      {getProjectIcon(project.icon)}
                    </div>
                    {project.id === '4' && (
                      <div className="px-5 py-2 bg-amber-50 text-amber-600 rounded-2xl flex items-center gap-2 font-bold text-[10px] border border-amber-100 uppercase tracking-widest shadow-sm">
                        Distinguished
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-indigo-50/50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl font-extrabold mb-6 group-hover:text-indigo-600 transition-colors leading-[1.1] tracking-tighter">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xl leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-12 flex items-center justify-between pt-10 border-t border-gray-100/50">
                  <button className="flex items-center gap-3 text-gray-900 font-black hover:text-indigo-600 hover:gap-5 transition-all uppercase text-xs tracking-[0.3em]">
                    Read Analysis <ChevronRight size={18} />
                  </button>
                  <ExternalLink size={18} className="text-gray-300 group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass p-16 md:p-24 rounded-[5rem] border border-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-5xl font-bold leading-tight">Industry Credentials</h2>
              <p className="text-gray-500 text-xl font-light">Formal recognition of my expertise in Python, Data Science, and Database Management from global institutions.</p>
              <div className="inline-flex py-4 px-8 rounded-3xl bg-gray-900 items-center justify-center text-white shadow-2xl font-bold uppercase tracking-widest text-xs">
                Verified Skills
              </div>
            </div>
            <div className="grid gap-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="glass p-10 rounded-[3rem] border border-white flex flex-col sm:flex-row items-center gap-8 group hover:bg-white transition-all duration-300">
                  <div className="shrink-0 text-indigo-600 font-black text-2xl group-hover:scale-125 transition-transform">
                    {idx + 1}.
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-extrabold text-2xl text-gray-900 mb-1">{cert.split(' – ')[0]}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">{cert.split(' – ')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-7xl font-black tracking-tighter leading-none">Let's <span className="text-indigo-600">Connect.</span></h2>
                <p className="text-2xl text-gray-400 font-light leading-relaxed">Available for research inquiries, graduate opportunities, and technical collaboration in AI & ML.</p>
              </div>

              <div className="space-y-12">
                {[
                  { label: 'Primary Contact', value: 'www.alinamercy@gmail.com', href: 'mailto:www.alinamercy@gmail.com' },
                  { label: 'GitHub Network', value: 'github.com/alina518', href: 'https://github.com/alina518' },
                  { label: 'Professional Profile', value: 'linkedin.com/in/alina-shibu', href: 'https://www.linkedin.com/in/alina-shibu-a4291b245/' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" className="block group">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-2">{item.label}</p>
                    <p className="text-3xl font-bold group-hover:text-indigo-600 transition-colors tracking-tight">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-12 md:p-20 rounded-[4rem] border border-white shadow-2xl">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Identified As</label>
                    <input type="text" placeholder="Full Name" className="w-full px-10 py-6 rounded-[2rem] bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-xl font-medium placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Electronic Mail</label>
                    <input type="email" placeholder="Email Address" className="w-full px-10 py-6 rounded-[2rem] bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-xl font-medium placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">The Proposition / Message</label>
                    <textarea rows={4} placeholder="Your vision..." className="w-full px-10 py-6 rounded-[2rem] bg-white/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-xl font-medium placeholder:text-gray-300 resize-none"></textarea>
                  </div>
                </div>
                <button className="w-full py-7 bg-gray-900 text-white rounded-[2.5rem] font-black text-xl tracking-widest uppercase hover:bg-gray-800 hover:scale-[1.01] transition-all shadow-2xl">
                  Transmit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/40">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tighter">
            AlinaShibu.
          </div>
          
          <div className="flex flex-wrap justify-center gap-16 text-gray-400 font-bold text-xs tracking-[0.4em] uppercase">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Start</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">Origins</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Artifacts</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Signal</a>
          </div>

          <div className="text-gray-400 text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 text-center">
            Purity In Minimalist Engineering • © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
