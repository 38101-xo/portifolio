import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles, Layers, ShoppingBag, CheckSquare, ShieldCheck, Eye } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper to render mockup illustration for each project
  const renderProjectMockup = (projectId) => {
    if (projectId === 'pink-store') {
      return (
        <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-brand-rose-light via-brand-white to-brand-surface rounded-2xl p-4 flex flex-col justify-between border border-brand-rose/25 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-brand-border/40">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose-light border border-brand-rose/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-wine/50" />
            </div>
            <span className="text-[10px] font-mono text-brand-wine bg-brand-rose-light px-2 py-0.5 rounded-full">
              pinkstore.store
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-brand-white p-2.5 rounded-xl border border-brand-border/60 shadow-xs">
              <div className="w-full h-12 rounded-lg bg-brand-rose-light flex items-center justify-center text-brand-wine mb-1.5">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="w-3/4 h-2 rounded bg-brand-black/20 mb-1" />
              <div className="w-1/2 h-2 rounded bg-brand-rose" />
            </div>
            <div className="bg-brand-white p-2.5 rounded-xl border border-brand-border/60 shadow-xs">
              <div className="w-full h-12 rounded-lg bg-brand-wine/10 flex items-center justify-center text-brand-wine mb-1.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="w-3/4 h-2 rounded bg-brand-black/20 mb-1" />
              <div className="w-1/2 h-2 rounded bg-brand-wine" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-brand-wine pt-2 border-t border-brand-border/40 font-mono">
            <span>Grid Responsivo</span>
            <span>Carrinho Dinâmico</span>
          </div>
        </div>
      );
    }

    if (projectId === 'taskflow') {
      return (
        <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-brand-surface via-brand-white to-brand-rose-light/50 rounded-2xl p-4 flex flex-col justify-between border border-brand-border relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-brand-border/40">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose-light border border-brand-rose/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-wine/50" />
            </div>
            <span className="text-[10px] font-mono text-brand-wine bg-brand-rose-light px-2 py-0.5 rounded-full">
              taskflow.app
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-brand-white p-2 rounded-xl border border-brand-border/60 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-brand-wine flex items-center justify-center text-brand-white text-[10px]">
                  ✓
                </div>
                <div className="w-28 h-2 rounded bg-brand-black/25 line-through" />
              </div>
              <span className="text-[10px] text-brand-rose font-medium">Concluída</span>
            </div>

            <div className="bg-brand-white p-2 rounded-xl border border-brand-border/60 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border border-brand-rose/50" />
                <div className="w-36 h-2 rounded bg-brand-black/60" />
              </div>
              <span className="text-[10px] text-brand-wine font-medium">Em foco</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-brand-wine pt-2 border-t border-brand-border/40 font-mono">
            <span>Organização Ágil</span>
            <span>Controle de Estado</span>
          </div>
        </div>
      );
    }

    if (projectId === 'techcare') {
      return (
        <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-brand-wine/5 via-brand-white to-brand-rose-light/40 rounded-2xl p-4 flex flex-col justify-between border border-brand-rose/25 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-brand-border/40">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-rose-light border border-brand-rose/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-wine/50" />
            </div>
            <span className="text-[10px] font-mono text-brand-wine bg-brand-rose-light px-2 py-0.5 rounded-full">
              techcare.solutions
            </span>
          </div>

          <div className="bg-brand-white p-3 rounded-xl border border-brand-border/60 shadow-xs my-auto space-y-2">
            <div className="flex items-center gap-2 text-brand-wine text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-rose" />
              <span>Suporte & Diagnóstico Ágil</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-6 rounded bg-brand-surface flex items-center justify-center text-[10px] text-brand-black/70">Rede</div>
              <div className="h-6 rounded bg-brand-surface flex items-center justify-center text-[10px] text-brand-black/70">Hardware</div>
              <div className="h-6 rounded bg-brand-surface flex items-center justify-center text-[10px] text-brand-black/70">Web</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-brand-wine pt-2 border-t border-brand-border/40 font-mono">
            <span>Triagem Técnica</span>
            <span>Layout Executivo</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projetos" className="py-24 bg-brand-white relative overflow-hidden">
      
      {/* Decorative blurred spots */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-rose-light/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-wine/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-light border border-brand-rose/30 text-brand-wine text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Portfólio Conceitual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-black tracking-tight mb-4">
            Projetos em <span className="italic font-normal text-gradient-wine">Destaque</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-black/70 font-light max-w-xl mx-auto">
            Projetos autorais desenvolvidos para aplicar na prática conceitos de lógica, desenvolvimento front-end, usabilidade e design de interfaces.
          </p>
          <div className="w-16 h-1 bg-brand-wine mx-auto rounded-full mt-6" />
        </div>

        {/* Informative Notice Badge */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-brand-rose-light/40 border border-brand-rose/30 flex items-center gap-3 text-xs sm:text-sm text-brand-wine">
          <Sparkles className="w-5 h-5 text-brand-rose shrink-0" />
          <p className="font-light">
            <strong className="font-semibold">Nota de transparência profissional:</strong> Os projetos abaixo são autorais e conceituais, elaborados para demonstrar repertório prático em HTML, CSS, JavaScript e UI Design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-brand-white rounded-3xl p-6 shadow-soft border border-brand-border/70 hover:border-brand-rose/60 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Preview Area */}
                <div className="mb-6 relative">
                  {renderProjectMockup(project.id)}
                  
                  {/* Conceptual Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-brand-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-brand-wine border border-brand-border shadow-xs">
                    Projeto Conceitual
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-brand-rose font-medium mb-1.5">
                    <span>{project.category}</span>
                    <span className="font-mono text-[11px] text-brand-black/50">{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-black group-hover:text-brand-wine transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-black/75 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-brand-surface text-brand-wine/90 text-[11px] font-mono border border-brand-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-brand-rose-light/50 text-brand-wine text-[11px] font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-border/50">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-rose-light/60 text-brand-wine font-medium text-xs sm:text-sm hover:bg-brand-wine hover:text-brand-white transition-all duration-300 group-hover:shadow-soft"
                >
                  <Eye className="w-4 h-4" />
                  <span>Conhecer projeto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
