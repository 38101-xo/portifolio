import React from 'react';
import { 
  Code, 
  Layout, 
  FileCode2, 
  Cpu, 
  Globe, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  HeartHandshake,
  Compass,
  Lightbulb
} from 'lucide-react';

export default function About() {
  const skills = [
    {
      name: 'HTML',
      category: 'Estruturação Semântica',
      description: 'Criação de páginas bem organizadas com tags semânticas, acessibilidade básica e SEO estrutural.',
      icon: FileCode2,
      accent: 'border-brand-rose/40 hover:border-brand-rose',
      tag: 'Markup'
    },
    {
      name: 'CSS',
      category: 'Estilização & Responsividade',
      description: 'Layouts modernos com Flexbox e Grid, animações sutis, design responsivo para todos os dispositivos e hierarquia visual.',
      icon: Layout,
      accent: 'border-brand-rose/40 hover:border-brand-rose',
      tag: 'Styling'
    },
    {
      name: 'JavaScript',
      category: 'Dinamismo & Interatividade',
      description: 'Manipulação do DOM, funções assíncronas, consumo de dados e interatividade em aplicações web contemporâneas.',
      icon: Code,
      accent: 'border-brand-rose/40 hover:border-brand-rose',
      tag: 'Linguagem'
    },
    {
      name: 'Lógica de programação',
      category: 'Resolução de Problemas',
      description: 'Pensamento algorítmico estruturado, decomposição de desafios complexos, estruturas de repetição e condições.',
      icon: Cpu,
      accent: 'border-brand-wine/30 hover:border-brand-wine',
      tag: 'Fundamento'
    },
    {
      name: 'Desenvolvimento Web',
      category: 'Soluções Integradas',
      description: 'Visão de ponta a ponta na criação de interfaces amigáveis, integração de componentes e boas práticas de código limpo.',
      icon: Globe,
      accent: 'border-brand-wine/30 hover:border-brand-wine',
      tag: 'Ecossistema'
    },
    {
      name: 'UI/UX Design',
      category: 'Experiência & Estética',
      description: 'Criação de interfaces elegantes, sensibilidade com tipografia, paletas de cores equilibradas e foco na experiência do usuário.',
      icon: Sparkles,
      accent: 'border-brand-rose/40 hover:border-brand-rose',
      tag: 'Design'
    },
  ];

  const values = [
    {
      title: 'Curiosidade Ativa',
      desc: 'Constante vontade de descobrir novas ferramentas, linguagens e paradigmas de desenvolvimento.',
      icon: Lightbulb
    },
    {
      title: 'Atenção aos Detalhes',
      desc: 'Cuidado minucioso com espaçamentos, legibilidade, contrastes e elegância visual.',
      icon: Compass
    },
    {
      title: 'Colaboração & Empatia',
      desc: 'Comunicação transparente e foco em criar soluções digitais que realmente ajudem as pessoas.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-surface relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-rose-light/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-brand-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-light border border-brand-rose/30 text-brand-wine text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Conheça Minha Trajetória</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-black tracking-tight mb-6">
            Sobre <span className="italic font-normal text-gradient-wine">Mim</span>
          </h2>
          <div className="w-16 h-1 bg-brand-wine mx-auto rounded-full mb-6" />
        </div>

        {/* Story & Biography Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-brand-white rounded-3xl p-8 sm:p-10 shadow-soft border border-brand-border/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-rose-light flex items-center justify-center text-brand-wine">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-black">
                    Construindo caminhos na tecnologia
                  </h3>
                  <p className="text-xs font-medium text-brand-wine uppercase tracking-wider">
                    Estudante & Futura Desenvolvedora
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-brand-black/80 font-light text-base sm:text-lg leading-relaxed">
                <p>
                  Sou uma estudante de <strong className="font-semibold text-brand-wine">Tecnologia da Informação</strong>, curiosa e dedicada a aprender constantemente. Tenho interesse em desenvolvimento web, interfaces digitais, design e soluções tecnológicas.
                </p>
                <p>
                  Gosto de explorar novas ferramentas, desenvolver minhas habilidades e transformar conhecimentos em projetos criativos. Acredito que a tecnologia é uma ferramenta poderosa para criar experiências que fazem a diferença na vida das pessoas.
                </p>
                <p className="text-sm text-brand-black/70 italic border-l-2 border-brand-rose pl-4 py-1">
                  "Combinar estética refinada com código bem organizado é a forma como vejo o futuro do desenvolvimento web."
                </p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="pt-8 mt-8 border-t border-brand-border/60 flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-rose-light/70 text-brand-wine text-xs font-medium">
                🌱 Aprendizado Contínuo
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-rose-light/70 text-brand-wine text-xs font-medium">
                💻 Foco em Front-end
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-rose-light/70 text-brand-wine text-xs font-medium">
                ✨ Sensibilidade em UI
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-rose-light/70 text-brand-wine text-xs font-medium">
                🎯 Boas Práticas
              </span>
            </div>
          </div>

          {/* Pillars & Values Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-white rounded-3xl p-6 shadow-soft border border-brand-border/60 hover:border-brand-rose/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-wine text-brand-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-brand-black mb-1 group-hover:text-brand-wine transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-black/75 leading-relaxed font-light">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Skills Section */}
        <div id="habilidades" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-black mb-3">
              Habilidades em Desenvolvimento
            </h3>
            <p className="text-sm sm:text-base text-brand-black/70 font-light">
              Competências técnicas e metodológicas que venho aprimorando ativamente através de estudos, cursos e projetos práticos.
            </p>
          </div>

          {/* Grid of Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`bg-brand-white rounded-3xl p-6 shadow-soft border transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group flex flex-col justify-between ${skill.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-rose-light text-brand-wine flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-surface text-brand-wine/80 border border-brand-border/60">
                        {skill.tag}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-brand-black mb-1 group-hover:text-brand-wine transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs font-medium text-brand-rose mb-3">
                      {skill.category}
                    </p>

                    <p className="text-xs sm:text-sm text-brand-black/75 font-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-brand-border/40 flex items-center justify-between text-xs text-brand-black/60 font-medium">
                    <span className="flex items-center gap-1.5 text-brand-wine">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Em constante prática
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
