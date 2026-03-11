import React from 'react';
import { Mail, Globe, Shield, Terminal, ArrowUpRight, Github, Linkedin, Cpu, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: scroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-[#0a0c10]/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              A
            </div>
            <h1 className="text-lg font-bold tracking-tight text-white uppercase ml-1">
              Arvin<span className="text-blue-500">.</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">Solutions</a>
            <a href="mailto:your-email@example.com" 
               className="px-6 py-2.5 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Systems Architect & Developer
              </div>

              <h2 className="text-6xl md:text-7xl font-extrabold leading-[1.05] text-white tracking-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resilience</span> at Scale.
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                I bridge the gap between complex <span className="text-slate-100">Enterprise Infrastructure</span> and fluid <span className="text-slate-100">User Experiences</span>. Specialist in Oracle Cloud ERP and Full-Stack Engineering.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all flex-1 min-w-[260px]">
                  <Shield className="text-blue-500 mb-4" size={24} />
                  <h3 className="font-bold text-white text-lg">Infrastructure</h3>
                  <p className="text-sm text-slate-500 mt-2">Oracle Cloud ERP, Active Directory, & Security Policy Orchestration.</p>
                </div>
                <div className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all flex-1 min-w-[260px]">
                  <Terminal className="text-cyan-400 mb-4" size={24} />
                  <h3 className="font-bold text-white text-lg">Development</h3>
                  <p className="text-sm text-slate-500 mt-2">Scalable Next.js apps, RESTful APIs, and Automated DevOps pipelines.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative group hidden lg:block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative h-[550px] w-full bg-[#0d1117] border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-24 h-24 bg-blue-600/10 rounded-3xl flex items-center justify-center mx-auto border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Cpu className="text-blue-400" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Cloud-First Philosophy</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Building digital assets that are high-performance, secure, and ready for global deployment.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono">Uptime: 99.9%</span>
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-300 font-mono">Secure API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SKILLS MARQUEE */}
        <section className="py-12 bg-[#080a0e] border-y border-slate-900 overflow-hidden">
          <div className="animate-marquee group-hover:pause">
            {[
              "Oracle Cloud ERP", "Active Directory", "Next.js", "React", "PostgreSQL", 
              "Node.js", "Docker", "Azure AD", "TypeScript", "Tailwind CSS", "API Security"
            ].concat([
              "Oracle Cloud ERP", "Active Directory", "Next.js", "React", "PostgreSQL", 
              "Node.js", "Docker", "Azure AD", "TypeScript", "Tailwind CSS", "API Security"
            ]).map((skill, i) => (
              <span key={i} className="text-5xl font-black text-slate-800/40 hover:text-blue-500 transition-colors mx-12 uppercase tracking-tighter">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 4. PROJECTS BENTO GRID */}
        <section id="solutions" className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold text-white tracking-tighter italic">Solutions Portfolio</h2>
              <p className="text-slate-500 text-lg">A selection of recent technical deployments.</p>
            </div>
            <div className="h-[1px] flex-grow mx-8 bg-slate-800 hidden md:block mb-4"></div>
            <Zap className="text-blue-500 mb-2" size={32} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature Project */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-slate-900/50 border border-slate-800 min-h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-10 z-20 space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-widest text-white">ERP Integration</span>
                <h3 className="text-3xl font-bold text-white">Procure-to-Pay Automation</h3>
                <p className="text-slate-400 max-w-md">Developing a custom middleware connecting Oracle Cloud ERP with third-party logistics for real-time inventory sync.</p>
              </div>
              <div className="absolute top-10 right-10 z-20">
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-all">
                  <ArrowUpRight className="text-white" size={24} />
                </div>
              </div>
            </div>

            {/* Side Card 1 */}
            <div className="group p-10 rounded-[2rem] bg-gradient-to-b from-slate-900 to-[#0a0c10] border border-slate-800 flex flex-col justify-between hover:border-blue-500/30 transition-all">
              <Shield className="text-blue-500" size={44} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">IAM Auditor</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Active Directory security tool that monitors and flags anomalous permission escalation in real-time.
                </p>
              </div>
            </div>

            {/* Side Card 2 */}
            <div className="group p-10 rounded-[2rem] bg-gradient-to-b from-slate-900 to-[#0a0c10] border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
              <Terminal className="text-cyan-400" size={44} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">SaaS Dashboard</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Analytics platform for enterprise resources featuring multi-tenant architecture and Stripe integration.
                </p>
              </div>
            </div>

            {/* Side Card 3 (Col Span 2) */}
            <div className="md:col-span-2 group p-10 rounded-[2rem] bg-slate-900/50 border border-slate-800 flex items-center justify-between hover:border-slate-600 transition-all">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold text-white mb-2">Infrastructure-as-Code</h3>
                <p className="text-slate-500 text-sm">Automating cloud deployments using Terraform and GitHub Actions for zero-downtime updates.</p>
              </div>
              <div className="hidden sm:block text-5xl font-black text-slate-800 tracking-widest">CI/CD</div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-900 bg-[#080a0e] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's build something <br/><span className="text-blue-500">extraordinary.</span></h2>
            <p className="text-slate-500 mb-8 max-w-sm">Open for architectural consulting and senior engineering roles.</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all"><Github size={20} /></a>
              <a href="mailto:arvin@example.com" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all"><Mail size={20} /></a>
            </div>
          </div>
          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-center space-y-6">
            <Globe className="mx-auto text-white opacity-50" size={40} />
            <h3 className="text-2xl font-bold text-white">Global Reach</h3>
            <p className="text-blue-100">Currently accepting remote projects worldwide.</p>
            <a href="mailto:your-email@example.com" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Start a Conversation
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between text-slate-600 text-sm">
          <p>© 2024 Arvin. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
