import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre Mim', href: '#sobre', id: 'sobre' },
    { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio')}
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-2xl bg-brand-wine flex items-center justify-center text-brand-white font-serif font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
            <span className="tracking-tight">RO</span>
            <div className="absolute -inset-1 rounded-2xl border border-brand-rose/40 -z-10 transition-all duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg font-semibold tracking-tight text-brand-black transition-colors group-hover:text-brand-wine">
              Raiany Oliveira
            </span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-brand-wine/75">
              Tecnologia da Informação
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-brand-white/80 border border-brand-border/60 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-brand-wine font-semibold bg-brand-rose-light/80'
                    : 'text-brand-black/70 hover:text-brand-wine hover:bg-brand-rose-light/40'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-wine" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contato"
            onClick={(e) => handleLinkClick(e, '#contato')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-wine text-brand-white text-xs lg:text-sm font-medium tracking-wide shadow-soft transition-all duration-300 hover:bg-brand-wine-dark hover:shadow-wine-glow hover:-translate-y-0.5"
          >
            <span>Fale Comigo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-brand-wine hover:bg-brand-rose-light/60 transition-colors focus:outline-none"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-brand-border/40 mt-3 px-5 py-6 shadow-soft-lg animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-rose-light text-brand-wine font-semibold'
                      : 'text-brand-black/80 hover:bg-brand-rose-light/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-wine" />}
                </a>
              );
            })}
            <div className="pt-4 border-t border-brand-border/50 mt-2">
              <a
                href="#contato"
                onClick={(e) => handleLinkClick(e, '#contato')}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-brand-wine text-brand-white text-sm font-medium shadow-soft"
              >
                <span>Entre em contato</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
