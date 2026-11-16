import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  Layers, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  Monitor, 
  ShieldCheck, 
  Wrench,
  HelpCircle
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'concept'

  // States for TaskFlow Demo
  const [tasks, setTasks] = useState(project.initialTasks || [
    { id: 1, text: 'Definir paleta de cores acessível', completed: true, category: 'Design' },
    { id: 2, text: 'Desenvolver componente de navegação responsivo', completed: true, category: 'Front-end' },
    { id: 3, text: 'Ajustar validação dos inputs do formulário', completed: false, category: 'JavaScript' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskFilter, setTaskFilter] = useState('all');

  // States for Pink Store Demo
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [cartOpen, setCartOpen] = useState(false);

  // States for TechCare Demo
  const [selectedIssue, setSelectedIssue] = useState('');
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  // TaskFlow handlers
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
      category: 'Geral'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (taskFilter === 'pending') return !t.completed;
    if (taskFilter === 'completed') return t.completed;
    return true;
  });

  // Pink Store handlers
  const storeItems = project.demoItems || [];
  const categories = ['Todas', ...new Set(storeItems.map(item => item.category))];
  const filteredProducts = selectedCategory === 'Todas' 
    ? storeItems 
    : storeItems.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

  // TechCare handlers
  const handleDiagnose = (issueKey) => {
    setSelectedIssue(issueKey);
    const diagnoses = {
      slowness: {
        title: "Diagnóstico: Gargalo de Memória e Processamento",
        action: "Recomendada limpeza de cache, otimização de inicialização de serviços e verificação de integridade do disco.",
        tier: "Plano Suporte Remoto Ágil"
      },
      wifi: {
        title: "Diagnóstico: Instabilidade de Rede e DNS",
        action: "Recomendada reconfiguração de gateway, ajuste de canais 5GHz e definição de DNS seguro.",
        tier: "Plano Infra & Conectividade"
      },
      web: {
        title: "Diagnóstico: Lentidão em Carregamento e SEO",
        action: "Recomendada compactação de mídias, minificação de scripts e implementação de cache de navegador.",
        tier: "Plano Web Care Especialista"
      }
    };
    setDiagnosisResult(diagnoses[issueKey] || null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative bg-brand-white w-full max-w-4xl rounded-3xl shadow-soft-lg border border-brand-border overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border/60 bg-brand-rose-light/40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-rose animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-black">
                  {project.title}
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-wine text-brand-white">
                  Conceito
                </span>
              </div>
              <p className="text-xs text-brand-wine font-medium">
                {project.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-brand-black/60 hover:text-brand-wine hover:bg-brand-rose-light transition-colors"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-brand-border/60 bg-brand-surface px-6 pt-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'demo'
                ? 'border-brand-wine text-brand-wine bg-brand-white rounded-t-xl'
                : 'border-transparent text-brand-black/60 hover:text-brand-wine'
            }`}
          >
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span>Demonstração Interativa</span>
          </button>

          <button
            onClick={() => setActiveTab('concept')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'concept'
                ? 'border-brand-wine text-brand-wine bg-brand-white rounded-t-xl'
                : 'border-transparent text-brand-black/60 hover:text-brand-wine'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Visão Geral & Arquitetura</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: DEMO INTERATIVA */}
          {activeTab === 'demo' && (
            <div>
              <div className="mb-4 p-3 rounded-2xl bg-brand-rose-light/40 border border-brand-rose/30 flex items-center justify-between text-xs text-brand-wine">
                <span className="flex items-center gap-2 font-medium">
                  <Sparkles className="w-4 h-4 text-brand-rose" />
                  Ambiente de Teste Conceitual Interativo
                </span>
                <span className="text-[11px] text-brand-black/60 font-mono">
                  Protótipo funcional em React
                </span>
              </div>

              {/* PROJECT SPECIFIC INTERACTION */}
              
              {/* 1. PINK STORE INTERACTION */}
              {project.id === 'pink-store' && (
                <div className="space-y-6">
                  {/* Category Filter & Cart Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-brand-border/60">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            selectedCategory === cat
                              ? 'bg-brand-wine text-brand-white'
                              : 'bg-brand-rose-light/60 text-brand-wine hover:bg-brand-rose-light'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCartOpen(!cartOpen)}
                      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-wine text-brand-white text-xs font-medium shadow-sm hover:bg-brand-wine-dark transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Sacola ({cart.reduce((a, c) => a + c.qty, 0)})</span>
                    </button>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredProducts.map(product => (
                      <div
                        key={product.id}
                        className="p-4 rounded-2xl border border-brand-border/70 bg-brand-surface/40 hover:bg-brand-surface transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-brand-white" style={{ backgroundColor: product.color }}>
                            {product.category.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="text-[11px] text-brand-wine/80 font-medium px-2 py-0.5 rounded-full bg-brand-rose-light">
                            {product.category}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-serif font-bold text-sm text-brand-black mb-1">
                            {product.name}
                          </h4>
                          <p className="text-xs font-semibold text-brand-wine mb-3">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </p>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full py-2 rounded-xl bg-brand-white border border-brand-rose/40 hover:bg-brand-wine hover:text-brand-white text-brand-wine text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Adicionar à Sacola</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Cart Drawer Simulation */}
                  {cartOpen && (
                    <div className="p-4 rounded-2xl bg-brand-white border-2 border-brand-rose/40 shadow-soft animate-fadeIn">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border/60">
                        <h4 className="font-serif font-bold text-sm text-brand-black flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4 text-brand-rose" />
                          Resumo da Sacola Conceitual
                        </h4>
                        <button 
                          onClick={() => setCartOpen(false)}
                          className="text-xs text-brand-black/60 hover:text-brand-wine"
                        >
                          Fechar
                        </button>
                      </div>

                      {cart.length === 0 ? (
                        <p className="text-xs text-brand-black/60 py-2">Sua sacola está vazia no momento.</p>
                      ) : (
                        <div className="space-y-2">
                          {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between text-xs">
                              <div>
                                <span className="font-medium text-brand-black">{item.name}</span>
                                <span className="text-brand-black/60 ml-2">x{item.qty}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-semibold text-brand-wine">
                                  R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                                </span>
                                <button
                                  onClick={() => handleRemoveFromCart(item.id)}
                                  className="text-brand-rose hover:text-brand-wine"
                                  title="Remover"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}

                          <div className="pt-3 mt-3 border-t border-brand-border/60 flex items-center justify-between font-semibold text-sm">
                            <span>Subtotal estimado:</span>
                            <span className="text-brand-wine font-serif text-base">
                              R$ {cartTotal.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 2. TASKFLOW INTERACTION */}
              {project.id === 'taskflow' && (
                <div className="space-y-5">
                  {/* Task Input Form */}
                  <form onSubmit={handleAddTask} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ex: Estudar seletores avançados de CSS..."
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-2xl bg-brand-surface border border-brand-border/80 text-xs sm:text-sm text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:border-brand-wine transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-2xl bg-brand-wine text-brand-white text-xs sm:text-sm font-medium hover:bg-brand-wine-dark transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Adicionar</span>
                    </button>
                  </form>

                  {/* Filter tabs */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setTaskFilter('all')}
                        className={`px-3 py-1 rounded-full ${taskFilter === 'all' ? 'bg-brand-wine text-brand-white font-medium' : 'bg-brand-surface text-brand-black/70'}`}
                      >
                        Todas ({tasks.length})
                      </button>
                      <button
                        onClick={() => setTaskFilter('pending')}
                        className={`px-3 py-1 rounded-full ${taskFilter === 'pending' ? 'bg-brand-wine text-brand-white font-medium' : 'bg-brand-surface text-brand-black/70'}`}
                      >
                        Pendentes ({tasks.filter(t => !t.completed).length})
                      </button>
                      <button
                        onClick={() => setTaskFilter('completed')}
                        className={`px-3 py-1 rounded-full ${taskFilter === 'completed' ? 'bg-brand-wine text-brand-white font-medium' : 'bg-brand-surface text-brand-black/70'}`}
                      >
                        Concluídas ({tasks.filter(t => t.completed).length})
                      </button>
                    </div>

                    <span className="text-[11px] text-brand-black/50 hidden sm:inline">
                      {tasks.filter(t => t.completed).length} de {tasks.length} concluídas
                    </span>
                  </div>

                  {/* Task List */}
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {filteredTasks.length === 0 ? (
                      <p className="text-center py-6 text-xs text-brand-black/50">
                        Nenhuma tarefa nesta categoria no momento.
                      </p>
                    ) : (
                      filteredTasks.map(task => (
                        <div
                          key={task.id}
                          className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                            task.completed 
                              ? 'bg-brand-surface/40 border-brand-border/40 opacity-75' 
                              : 'bg-brand-white border-brand-border hover:border-brand-rose/50 shadow-sm'
                          }`}
                        >
                          <div 
                            className="flex items-center gap-3 cursor-pointer flex-1"
                            onClick={() => handleToggleTask(task.id)}
                          >
                            <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                              task.completed 
                                ? 'bg-brand-wine border-brand-wine text-brand-white' 
                                : 'border-brand-rose/60 bg-brand-white'
                            }`}>
                              {task.completed && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <span className={`text-xs sm:text-sm ${task.completed ? 'line-through text-brand-black/50' : 'text-brand-black font-medium'}`}>
                              {task.text}
                            </span>
                          </div>

                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="p-1.5 text-brand-black/40 hover:text-brand-rose transition-colors"
                            title="Excluir tarefa"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* 3. TECHCARE INTERACTION */}
              {project.id === 'techcare' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border/60">
                    <h4 className="font-serif font-bold text-sm text-brand-black mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-wine" />
                      Simulador de Diagnóstico Rápido de TI
                    </h4>
                    <p className="text-xs text-brand-black/70 mb-4 font-light">
                      Selecione um sintoma para ver a análise técnica preliminar:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        onClick={() => handleDiagnose('slowness')}
                        className={`p-3 rounded-xl border text-left transition-all text-xs font-medium ${
                          selectedIssue === 'slowness'
                            ? 'bg-brand-wine text-brand-white border-brand-wine shadow-sm'
                            : 'bg-brand-white border-brand-border text-brand-black hover:border-brand-rose/60'
                        }`}
                      >
                        <Monitor className="w-4 h-4 mb-1 text-brand-rose" />
                        <div>Computador Lento ou Travando</div>
                      </button>

                      <button
                        onClick={() => handleDiagnose('wifi')}
                        className={`p-3 rounded-xl border text-left transition-all text-xs font-medium ${
                          selectedIssue === 'wifi'
                            ? 'bg-brand-wine text-brand-white border-brand-wine shadow-sm'
                            : 'bg-brand-white border-brand-border text-brand-black hover:border-brand-rose/60'
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4 mb-1 text-brand-rose" />
                        <div>Quedas de Internet & Rede</div>
                      </button>

                      <button
                        onClick={() => handleDiagnose('web')}
                        className={`p-3 rounded-xl border text-left transition-all text-xs font-medium ${
                          selectedIssue === 'web'
                            ? 'bg-brand-wine text-brand-white border-brand-wine shadow-sm'
                            : 'bg-brand-white border-brand-border text-brand-black hover:border-brand-rose/60'
                        }`}
                      >
                        <Wrench className="w-4 h-4 mb-1 text-brand-rose" />
                        <div>Site Fora do Ar ou Lento</div>
                      </button>
                    </div>

                    {diagnosisResult && (
                      <div className="mt-4 p-4 rounded-xl bg-brand-white border border-brand-rose/30 shadow-sm animate-fadeIn">
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-wine mb-1">
                          <CheckCircle2 className="w-4 h-4 text-brand-rose" />
                          {diagnosisResult.title}
                        </div>
                        <p className="text-xs text-brand-black/75 leading-relaxed font-light mb-2">
                          {diagnosisResult.action}
                        </p>
                        <span className="text-[10px] font-semibold text-brand-wine uppercase tracking-wider bg-brand-rose-light px-2.5 py-0.5 rounded-full">
                          {diagnosisResult.tier}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Services preview */}
                  <div>
                    <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-brand-wine mb-2">
                      Serviços de Suporte Oferecidos na Plataforma
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.services?.map((svc, i) => (
                        <div key={i} className="p-3 rounded-xl bg-brand-surface/60 border border-brand-border/60 text-xs">
                          <p className="font-semibold text-brand-black mb-1">{svc.title}</p>
                          <p className="text-[11px] text-brand-black/70 font-light">{svc.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: VISÃO GERAL & CONCEITO */}
          {activeTab === 'concept' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-black mb-2">
                  Objetivo do Projeto
                </h4>
                <p className="text-sm text-brand-black/80 font-light leading-relaxed">
                  {project.conceptDetails.objective}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-wine mb-3">
                  Destaques da Implementação
                </h4>
                <ul className="space-y-2">
                  {project.conceptDetails.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-black/75 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-rose mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-wine mb-3">
                  Tecnologias & Metodologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full bg-brand-rose-light text-brand-wine text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border/60 text-xs text-brand-black/70">
                <p className="font-medium text-brand-wine mb-1">Nota de Portfólio:</p>
                <p className="font-light">
                  Este projeto foi concebido e codificado como peça autoral demonstrativa por Raiany Oliveira para consolidar conceitos fundamentais de front-end e UX.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-brand-border/60 bg-brand-surface flex items-center justify-between">
          <span className="text-xs text-brand-black/60 font-mono">
            {project.badge} &middot; {project.year}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-brand-wine text-brand-white text-xs font-semibold hover:bg-brand-wine-dark transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>

    </div>
  );
}
