import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome completo.';
    } else if (formData.name.trim().length < 3) {
      errs.name = 'O nome deve ter pelo menos 3 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Insira um formato de e-mail válido (ex: seu@email.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Por favor, informe o assunto da mensagem.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Por favor, escreva sua mensagem.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Sua mensagem deve conter pelo menos 10 caracteres.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('raianycarolina.iec@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
    setErrors({});
  };

  // Generate mailto link with encoded content
  const mailtoLink = `mailto:raianycarolina.iec@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Contato através do Portfólio'
  )}&body=${encodeURIComponent(
    `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
  )}`;

  return (
    <section id="contato" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-rose-light/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-light border border-brand-rose/30 text-brand-wine text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Vamos Conectar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-black tracking-tight mb-4">
            Tem uma ideia ou oportunidade? <br />
            <span className="italic font-normal text-gradient-wine">Vamos conversar!</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-black/70 font-light max-w-xl mx-auto">
            Estou sempre aberta a novas conexões, aprendizados práticos, projetos colaborativos e oportunidades na área de Tecnologia da Informação.
          </p>
          <div className="w-16 h-1 bg-brand-wine mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-brand-white rounded-3xl p-6 sm:p-8 shadow-soft border border-brand-border/70 hover:border-brand-rose/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-rose-light text-brand-wine flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-surface text-brand-wine hover:bg-brand-rose-light border border-brand-border transition-colors"
                  title="Copiar e-mail"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="font-serif text-lg font-bold text-brand-black mb-1">
                E-mail Direto
              </h3>
              <p className="text-xs text-brand-black/60 mb-3">
                Para propostas, mensagens profissionais e parcerias acadêmicas:
              </p>
              
              <a
                href="mailto:raianycarolina.iec@gmail.com"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-wine hover:text-brand-rose transition-colors break-all"
              >
                <span>raianycarolina.iec@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Direct WhatsApp Card (Demonstrative) */}
            <div className="bg-brand-white rounded-3xl p-6 sm:p-8 shadow-soft border border-brand-border/70 hover:border-brand-rose/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-rose-light text-brand-wine flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-brand-surface text-brand-black/60 border border-brand-border">
                  Demonstrativo
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-brand-black mb-1">
                Telefone / WhatsApp
              </h3>
              <p className="text-xs text-brand-black/60 mb-3">
                Canal de comunicação rápida (número ilustrativo de portfólio):
              </p>
              
              <div className="flex items-center gap-2 text-base font-semibold text-brand-wine">
                <span>(11) 99999-9999</span>
              </div>
              <p className="text-[11px] text-brand-black/50 mt-1 italic">
                * Número de exemplo conforme orientação do projeto.
              </p>
            </div>

            {/* Availability & Location Card */}
            <div className="bg-brand-wine rounded-3xl p-6 sm:p-8 text-brand-white shadow-soft-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-rose-muted mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-rose animate-ping" />
                  <span>Status Profissional</span>
                </div>
                <h4 className="font-serif text-xl font-bold mb-2">
                  Aberta a oportunidades de estágio e projetos
                </h4>
                <p className="text-xs sm:text-sm text-brand-rose-light/80 leading-relaxed font-light">
                  Estudante motivada, com forte compromisso com entrega, pontualidade e desenvolvimento ágil em equipe.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-wine-light/50 flex items-center justify-between text-xs text-brand-rose-light/70">
                <span>São Paulo, SP &middot; Brasil</span>
                <span>Remoto / Híbrido</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-brand-white rounded-3xl p-8 sm:p-10 shadow-soft border border-brand-border/70 relative">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border/60">
                <div className="w-10 h-10 rounded-xl bg-brand-rose-light text-brand-wine flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-black">
                    Envie uma Mensagem
                  </h3>
                  <p className="text-xs text-brand-black/60">
                    Preencha os campos abaixo e receba um retorno em breve.
                  </p>
                </div>
              </div>

              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="py-8 px-6 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-brand-rose-light text-brand-wine mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle className="w-10 h-10 text-brand-wine" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-brand-black">
                      Validação Concluída com Sucesso!
                    </h4>
                    <p className="text-sm text-brand-black/75 max-w-md mx-auto font-light leading-relaxed">
                      Olá, <strong>{formData.name}</strong>! Seus dados foram validados localmente com êxito no formulário.
                    </p>
                  </div>

                  {/* Action box without backend spoofing */}
                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border text-left max-w-lg mx-auto space-y-3">
                    <div className="flex items-start gap-2 text-xs text-brand-wine font-medium">
                      <Sparkles className="w-4 h-4 shrink-0 text-brand-rose mt-0.5" />
                      <span>Como este portfólio não possui serviço de e-mail backend conectado, você pode:</span>
                    </div>

                    <a
                      href={mailtoLink}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-wine text-brand-white text-xs sm:text-sm font-semibold hover:bg-brand-wine-dark transition-all shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Abrir no seu E-mail Pré-preenchido</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <p className="text-[11px] text-brand-black/50 text-center font-light">
                      Ou envie diretamente para <strong className="text-brand-wine">raianycarolina.iec@gmail.com</strong>.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="text-xs font-semibold text-brand-wine underline hover:text-brand-rose transition-colors pt-2"
                  >
                    Enviar outra mensagem ou testar novamente
                  </button>
                </div>
              ) : (
                /* CONTACT FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-brand-black mb-1.5">
                      Nome completo <span className="text-brand-rose">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Como prefere ser chamado(a)?"
                      className={`w-full px-4 py-3 rounded-2xl bg-brand-surface border text-sm text-brand-black placeholder:text-brand-black/40 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-400 bg-red-50/40'
                          : 'border-brand-border/80 focus:border-brand-wine'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brand-black mb-1.5">
                      Seu e-mail <span className="text-brand-rose">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemplo@email.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-brand-surface border text-sm text-brand-black placeholder:text-brand-black/40 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 bg-red-50/40'
                          : 'border-brand-border/80 focus:border-brand-wine'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-brand-black mb-1.5">
                      Assunto <span className="text-brand-rose">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Oportunidade de estágio / Projeto Front-end"
                      className={`w-full px-4 py-3 rounded-2xl bg-brand-surface border text-sm text-brand-black placeholder:text-brand-black/40 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-400 bg-red-50/40'
                          : 'border-brand-border/80 focus:border-brand-wine'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-brand-black mb-1.5">
                      Mensagem <span className="text-brand-rose">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre sua ideia, proposta ou projeto..."
                      className={`w-full px-4 py-3 rounded-2xl bg-brand-surface border text-sm text-brand-black placeholder:text-brand-black/40 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50/40'
                          : 'border-brand-border/80 focus:border-brand-wine'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-brand-wine text-brand-white font-semibold text-sm tracking-wide shadow-soft hover:bg-brand-wine-dark hover:shadow-wine-glow transition-all duration-300 active:scale-[0.99]"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-brand-black/50 text-center font-light pt-1">
                    🔒 Seus dados serão validados com segurança diretamente no seu navegador.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
