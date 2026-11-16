# 🌸 Portfólio Pessoal | Raiany Oliveira

Portfólio moderno, sofisticado e responsivo desenvolvido sob medida para **Raiany Oliveira**, estudante e profissional em desenvolvimento na área de **Tecnologia da Informação (TI)** com foco em desenvolvimento web, interfaces digitais, design e inovação.

O projeto foi concebido com uma **identidade visual autoral, estética editorial e minimalista**, inspirada nas melhores referências do *Awwwards*, *SiteInspire* e *Mobbin*, combinando sutileza, elegância e robustez técnica.

---

## 🎨 Identidade Visual & Paleta de Cores

A paleta de cores foi estruturada para conferir sofisticação e maturidade profissional, unindo tons terrosos e florais modernos:

| Cor | Hex | Aplicação |
|---|---|---|
| **Rosa Queimado** | `#D98CA3` | Detalhes nobres, destaques gráficos e microinterações |
| **Rosa Claro** | `#F7E8ED` | Fundos suaves, badges, superfícies secundárias |
| **Vinho Elegante** | `#6D2945` | Botões principais, monograma, títulos e contrastes fortes |
| **Branco Suave** | `#FFFDFC` | Superfície primária e fundos de leitura |
| **Preto Suave** | `#242124` | Tipografia principal de alta legibilidade |

### 🖋️ Tipografia
- **Títulos Editoriais:** *Playfair Display* (serifa refinada, moderna e artística)
- **Textos & Menus:** *Plus Jakarta Sans* e *Inter* (sans-serif geométrica, limpa e legível)
- **Elementos de Código:** *Fira Code* (monospace técnica)

---

## 💻 Estrutura & Seções

1. **Header / Navegação:**
   - Barra de navegação fixa com efeito *glassmorphism* (blur translúcido).
   - Monograma exclusivo `RO` em vinho e rosa queimado.
   - Indicador dinâmico da seção ativa durante a rolagem.
   - Menu hambúrguer adaptado e responsivo para celulares e tablets.

2. **Início (Hero Section):**
   - Apresentação impactante com tipografia fluida.
   - Chamadas para ação ("Conheça meus projetos" e "Entre em contato").
   - Composição visual editorial com janela de código/UI interativa (`raiany-dev.tsx`), badges flutuantes e formas orgânicas suaves.

3. **Sobre Mim:**
   - Apresentação da trajetória e visão de tecnologia.
   - Destaque para pilares de atuação: *Curiosidade Ativa*, *Atenção aos Detalhes* e *Colaboração & Empatia*.
   - **Habilidades em Desenvolvimento:** Cards sem porcentagens artificiais, cobrindo:
     - *HTML* (Estruturação semântica e acessibilidade)
     - *CSS* (Flexbox, Grid, design responsivo)
     - *JavaScript* (DOM, assincronismo, lógica ES6+)
     - *Lógica de Programação* (Algoritmos e decomposição de problemas)
     - *Desenvolvimento Web* (Soluções ponta a ponta e boas práticas)
     - *UI/UX Design* (Hierarquia visual, espaçamentos e usabilidade)

4. **Projetos em Destaque:**
   - Identificação transparente de **Projetos Conceituais Demonstrativos**:
     - **Pink Store:** Loja virtual fictícia com vitrine moderna, categorias e carrinho responsivo.
     - **TaskFlow:** Aplicativo de organização ágil de tarefas diárias com controle de estado.
     - **TechCare:** Plataforma de suporte tecnológico corporativo com triagem de chamados.
   - **Modal Interativo Exclusivo:** Cada projeto conta com um ambiente interativo onde o visitante pode testar filtros, adicionar itens à sacola ou simular diagnósticos técnicos de TI.

5. **Contato:**
   - Apresentação acolhedora: *"Tem uma ideia ou oportunidade? Vamos conversar!"*
   - E-mail direto (`raianycarolina.iec@gmail.com`) com botão de cópia com feedback instantâneo.
   - WhatsApp demonstrativo `(11) 99999-9999`.
   - Formulário com validação completa em tempo real (Nome, E-mail, Assunto, Mensagem) e integração segura para abertura de e-mail pré-preenchido.

6. **Rodapé & Utilidades:**
   - Rodapé completo com direitos reservados e links de acesso rápido.
   - Botão flutuante suave para retorno ao topo da página.

---

## 🚀 Como Abrir e Visualizar o Site

Você tem **3 maneiras super simples** para abrir e ver o portfólio funcionando:

### 🌟 Opção 1: Com 1 Clique (Mais Rápido e Sem Terminal)
Basta dar **duplo clique** no arquivo executável:
- **`ABRIR_PORTFOLIO.bat`**
*(Ele abrirá instantaneamente o seu navegador padrão já com o site completo, sem precisar digitar nenhum comando!)*

Ou se preferir, dê duplo clique direto no arquivo:
- **`abrir-site-direto.html`**

---

### 💻 Opção 2: Servidor de Desenvolvimento com 1 Clique
Dê duplo clique no arquivo:
- **`INICIAR_MODO_DEV.bat`**
*(Inicia o servidor Vite e abre automaticamente a janela do navegador em `http://localhost:5173`).*

---

### ⚙️ Opção 3: Pelo Terminal (Modo Desenvolvedor)
1. **Abra o terminal na pasta do projeto:**
   ```bash
   cd ray-3cc
   ```
2. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
3. Acesse no navegador: `http://localhost:5173`

5. **Para gerar a versão otimizada de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais minificados e prontos para publicação serão gerados na pasta `dist/`.

---

## 🌐 Como Publicar no GitHub

Siga os passos abaixo para enviar seu código para o seu repositório no GitHub:

1. **Crie um novo repositório no GitHub:**
   - Acesse [github.com/new](https://github.com/new).
   - Dê um nome ao repositório (por exemplo: `portfolio-raiany-oliveira`).
   - Mantenha como **Público** e **não** marque as opções de adicionar README ou .gitignore (já criamos esses arquivos para você).
   - Clique em **Create repository**.

2. **Inicialize o Git na pasta do projeto (caso ainda não esteja inicializado):**
   ```bash
   git init
   ```

3. **Adicione todos os arquivos e faça o primeiro commit:**
   ```bash
   git add .
   git commit -m "feat: portfolio inicial completo de Raiany Oliveira"
   ```

4. **Renomeie a branch principal para `main`:**
   ```bash
   git branch -M main
   ```

5. **Vincule o repositório remoto do seu GitHub:**
   *(Substitua `SEU-USUARIO` pelo seu nome de usuário no GitHub)*
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/portfolio-raiany-oliveira.git
   ```

6. **Envie os arquivos para o GitHub:**
   ```bash
   git push -u origin main
   ```

---

## ⚡ Como Publicar na Vercel

A **Vercel** é a melhor plataforma gratuita e de alto desempenho para hospedar projetos React com Vite.

### Método 1: Pela Interface Web da Vercel (Recomendado e mais simples)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do **GitHub**.
2. No painel inicial (Dashboard), clique no botão **"Add New..."** e selecione **"Project"**.
3. Localize o repositório `portfolio-raiany-oliveira` que você acabou de subir no GitHub e clique em **"Import"**.
4. Nas configurações do projeto:
   - **Framework Preset:** Selecione `Vite` (a Vercel normalmente detecta de forma automática).
   - **Root Directory:** `./` (deixe padrão).
   - **Build Command:** `npm run build` (padrão).
   - **Output Directory:** `dist` (padrão).
5. Clique no botão azul **"Deploy"**.
6. Em menos de 1 minuto seu site estará no ar com um link seguro HTTPS (exemplo: `https://portfolio-raiany-oliveira.vercel.app`).

### Método 2: Pelo Terminal via Vercel CLI (Opcional)

Se preferir publicar diretamente pela linha de comando:

```bash
# Instale a CLI da Vercel globalmente
npm i -g vercel

# Execute o comando de deploy
vercel
```
Siga as instruções rápidas na tela e seu site será publicado instantaneamente!

---

## 📁 Estrutura de Arquivos

```
ray-3cc/
├── dist/                      # Arquivos finais otimizados para produção
├── node_modules/              # Dependências instaladas
├── public/                    # Arquivos públicos e estáticos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Cabeçalho fixo com blur e menu mobile
│   │   ├── Hero.jsx           # Tela inicial editorial com CTAs e arte visual
│   │   ├── About.jsx          # Apresentação, valores e grid de habilidades
│   │   ├── Projects.jsx       # Vitrine dos 3 projetos conceituais
│   │   ├── ProjectModal.jsx   # Modal interativo de experimentação dos projetos
│   │   ├── Contact.jsx        # Seção de contato com validação e canais diretos
│   │   ├── Footer.jsx         # Rodapé completo e direitos reservados
│   │   └── BackToTop.jsx      # Botão flutuante suave para voltar ao topo
│   ├── data/
│   │   └── projectsData.js    # Dados estruturados dos projetos conceituais
│   ├── App.jsx                # Componente orquestrador da página
│   ├── index.css              # Configurações de Tailwind, glassmorphism e temas
│   └── main.jsx               # Ponto de entrada React 18
├── index.html                 # HTML semântico com fontes Playfair & Plus Jakarta
├── package.json               # Configurações do projeto e scripts
├── postcss.config.js          # Configuração do PostCSS
├── tailwind.config.js         # Paleta de cores oficial e extensões do tema
├── vercel.json                # Configuração de rotas para deploy na Vercel
├── .gitignore                 # Arquivos ignorados pelo Git
└── README.md                  # Documentação completa do projeto
```

---

## 👩‍💻 Desenvolvido para

**Raiany Oliveira**  
*Estudante de Tecnologia da Informação*  
- E-mail: [raianycarolina.iec@gmail.com](mailto:raianycarolina.iec@gmail.com)  
- WhatsApp: (11) 99999-9999 *(Ilustrativo)*
