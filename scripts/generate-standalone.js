import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, 'assets');

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('CSS or JS file not found in dist/assets');
  process.exit(1);
}

const css = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
const js = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');

const htmlContent = `<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='30' fill='%236D2945'/><circle cx='50' cy='50' r='38' fill='none' stroke='%23D98CA3' stroke-width='3' stroke-dasharray='4 4'/><text x='50' y='58' font-family='serif' font-size='38' font-weight='600' fill='%23FFFDFC' text-anchor='middle'>RO</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raiany Oliveira | Tecnologia da Informação & Desenvolvimento Web</title>
    <meta name="description" content="Portfólio de Raiany Oliveira — Estudante e profissional em desenvolvimento na área de Tecnologia da Informação, com foco em desenvolvimento web, interfaces digitais e inovação." />
    <meta name="keywords" content="Raiany Oliveira, Tecnologia da Informação, TI, Desenvolvedora Web, Front-end, UI Design, Portfólio" />
    <meta name="author" content="Raiany Oliveira" />
    
    <!-- Google Fonts: Playfair Display + Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
    <style>
${css}
    </style>
  </head>
  <body class="bg-brand-white text-brand-black font-sans antialiased selection:bg-brand-rose selection:text-brand-white min-h-screen">
    <div id="root"></div>
    <script>
${js}
    </script>
  </body>
</html>`;

fs.writeFileSync('abrir-site-direto.html', htmlContent, 'utf8');
fs.writeFileSync(path.join(distDir, 'index-standalone.html'), htmlContent, 'utf8');
console.log('Arquivos standalone gerados com sucesso!');
