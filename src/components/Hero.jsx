import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Palette, Laptop, Layers, Heart, Compass } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-20 flex items-center bg-subtle-mesh overflow-hidden">
      {/* Decorative Organic Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-rose-light/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-brand-rose/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-brand-wine/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-rose-light/80 border border-brand-rose/30 text-brand-wine text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-rose animate-ping" />
              <span>Tecnologia da Informação &middot; Portfólio Criativo</span>
            </div>

            {/* Main Greeting and Headings */}
            <div className="space-y-3 mb-6">
              <p className="font-sans text-brand-wine font-semibold text-lg sm:text-xl tracking-tight flex items-center gap-2">
                <span>Olá, eu sou</span>
                <span className="font-serif italic font-normal text-brand-rose">Raiany Oliveira</span>
                <Sparkles className="w-4 h-4 text-brand-rose animate-pulse" />
              </p>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-black font-semibold leading-[1.15] tracking-tight">
                Transformando ideias em <br className="hidden sm:inline" />
                <span className="italic font-normal text-gradient-wine">experiências digitais.</span>
              </h1>
            </div>

            {/* Presentation Text */}
            <p className="text-base sm:text-lg text-brand-black/75 leading-relaxed max-w-2xl mb-8 font-light">
              Apaixonada por tecnologia, criatividade e inovação. Estou construindo minha trajetória na área de 
              <strong className="font-semibold text-brand-wine"> Tecnologia da Informação</strong>, explorando o desenvolvimento web e buscando transformar ideias em soluções digitais que unam elegância visual e eficiência.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projetos"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-brand-wine text-brand-white text-sm font-semibold tracking-wide shadow-soft transition-all duration-300 hover:bg-brand-wine-dark hover:shadow-wine-glow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Conheça meus projetos</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="#contato"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-white text-brand-wine border border-brand-rose/40 text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-brand-rose-light/50 hover:border-brand-rose hover:-translate-y-0.5"
              >
                <span>Entre em contato</span>
              </a>
            </div>

            {/* Quick Micro Highlights */}
            <div className="mt-12 pt-8 border-t border-brand-border/60 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-wine">TI</p>
                <p className="text-xs text-brand-black/70 font-medium mt-0.5">Foco & Formação</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-wine">Web</p>
                <p className="text-xs text-brand-black/70 font-medium mt-0.5">Front-end & UI</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-wine">100%</p>
                <p className="text-xs text-brand-black/70 font-medium mt-0.5">Dedicação & Criação</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Editorial Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Interactive Preview Card */}
            <div className="relative w-full max-w-md bg-brand-white rounded-3xl p-6 shadow-soft-lg border border-brand-rose/25 transition-all duration-500 hover:shadow-rose-glow">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-rose/60" />
                  <div className="w-3 h-3 rounded-full bg-brand-rose-light border border-brand-rose/40" />
                  <div className="w-3 h-3 rounded-full bg-brand-wine/40" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-rose-light/50 border border-brand-rose/20 text-[11px] font-mono text-brand-wine">
                  <Terminal className="w-3 h-3" />
                  <span>raiany-dev.tsx</span>
                </div>
              </div>

              {/* Code / Visual Card Body */}
              <div className="space-y-3 font-mono text-xs text-brand-black/80 bg-brand-surface/70 rounded-2xl p-4 border border-brand-border/40">
                <div className="flex items-center gap-2 text-brand-wine font-medium">
                  <span className="text-brand-rose">const</span>
                  <span>developer</span>
                  <span className="text-brand-rose">=</span>
                  <span>&#123;</span>
                </div>
                
                <div className="pl-4 space-y-1 text-[11px] leading-relaxed">
                  <div>
                    <span className="text-brand-black/60">name:</span> <span className="text-brand-wine font-semibold">"Raiany Oliveira"</span>,
                  </div>
                  <div>
                    <span className="text-brand-black/60">field:</span> <span className="text-brand-rose font-medium">"Tecnologia da Informação"</span>,
                  </div>
                  <div>
                    <span className="text-brand-black/60">passion:</span> <span className="text-brand-wine font-medium">"Transformar ideias em código"</span>,
                  </div>
                  <div>
                    <span className="text-brand-black/60">learningPath:</span> [
                    <span className="text-brand-wine">"HTML"</span>, <span className="text-brand-wine">"CSS"</span>, <span className="text-brand-wine">"JS"</span>, <span className="text-brand-wine">"UI/UX"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-brand-black/60">mindset:</span> <span className="text-brand-rose">"Constante evolução"</span>
                  </div>
                </div>

                <div className="text-brand-wine font-medium">&#125;;</div>
              </div>

              {/* Graphic Showcase Inside Card */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-brand-rose-light/40 to-brand-surface border border-brand-rose/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-wine text-brand-white flex items-center justify-center shadow-sm">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-black">Design & Front-end</p>
                    <p className="text-[11px] text-brand-wine">Interfaces Limpas e Elegantes</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Pronta para novos aprendizados" />
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-brand-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-soft border border-brand-border/80 flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-brand-rose-light flex items-center justify-center text-brand-wine">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-black/60 uppercase tracking-wider font-semibold">Visual</p>
                  <p className="text-xs font-bold text-brand-wine">UI / UX Elegante</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-brand-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-soft border border-brand-border/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-wine text-brand-white flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-black/60 uppercase tracking-wider font-semibold">Criatividade</p>
                  <p className="text-xs font-bold text-brand-black">Soluções Digitais</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
