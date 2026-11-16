import React from 'react';
import { ArrowUp, Heart, Code, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-brand-black text-brand-white relative overflow-hidden pt-16 pb-12">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/3 w-96 h-32 bg-brand-wine/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-wine flex items-center justify-center text-brand-white font-serif font-bold text-lg border border-brand-rose/40">
                <span>RO</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-white">
                  Raiany Oliveira
                </h3>
                <p className="text-xs text-brand-rose uppercase tracking-wider font-medium">
                  Tecnologia da Informação
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Construindo uma trajetória em TI com foco em desenvolvimento web, interfaces digitais e criação de soluções que combinam elegância e funcionalidade.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-rose-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Disponível para estágios & conexões</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-rose">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-rose transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-rose">
              Contato Direto
            </h4>
            <p className="text-sm text-white/70 font-light">
              Interessado(a) em bater um papo sobre projetos ou tecnologia?
            </p>
            <a
              href="mailto:raianycarolina.iec@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-rose-muted hover:text-brand-white transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-rose" />
              <span>raianycarolina.iec@gmail.com</span>
            </a>
            <p className="text-xs text-white/50 pt-2 font-mono">
              São Paulo, SP &middot; Brasil
            </p>
          </div>

        </div>

        {/* Bottom bar with copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="font-light text-center sm:text-left">
            &copy; {currentYear} <strong>Raiany Oliveira</strong>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-light text-white/40">
              Desenvolvido com React, Vite & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-brand-wine text-white transition-colors text-xs"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
