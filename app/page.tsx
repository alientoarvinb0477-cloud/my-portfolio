import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. Header/Navigation */}
      <nav className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">ARVIN A.</h1>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#solutions" className="hover:text-blue-600">Solutions</a>
          <a href="mailto:your-email@example.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact Me</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 2. Left Side: Your Bio Content */}
          <section id="about" className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
              Full-Stack Developer & Oracle Cloud ERP Specialist
            </div>
            <h2 className="text-5xl font-extrabold leading-tight text-slate-900">
              Building Scalable <span className="text-blue-600">Digital Assets</span> & Enterprise Solutions.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a unique blend of **Enterprise Infrastructure Management** and **Modern Web Development**, 
              I specialize in creating high-performance digital assets that remain secure, organized, and scalable.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-bold text-blue-600">Enterprise</h3>
                <p className="text-sm text-slate-500">Oracle Cloud ERP & Active Directory Admin</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h3 className="font-bold text-blue-600">Development</h3>
                <p className="text-sm text-slate-500">Full-Stack Web & Software Engineering</p>
              </div>
            </div>
          </section>

          {/* 3. Right Side: Visual Replacement for 3D Viewer */}
          <section className="relative h-[400px] w-full bg-blue-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="text-center z-10 p-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Systems Architect</h3>
              <p className="text-blue-100 max-w-xs mx-auto">
                Specializing in bridging the gap between enterprise infrastructure and modern user experiences.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}