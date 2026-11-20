// ==========================================================
// icones.js - ícones SVG (vetoriais) usados no app
// Usamos SVG em vez de emoji: o desenho é uniforme em qualquer
// celular e não depende da fonte de emoji do sistema.
// Como é código, continua funcionando offline (PWA).
// ==========================================================

function svgIcone(caminhos) {
  return `<svg class="icone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${caminhos}</svg>`;
}

const ICONES = {
  // Bebidas e comidas do cardápio
  cafe: svgIcone(`
    <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/>
    <path d="M17 9h1a3 3 0 0 1 0 6h-1"/>
    <path d="M8 2c0 1-1 1.5-1 2.5M12 2c0 1-1 1.5-1 2.5"/>
  `),
  leite: svgIcone(`
    <path d="M7 4h10l-1 16H8L7 4Z"/>
    <path d="M7.6 10h8.8"/>
  `),
  chocolate: svgIcone(`
    <rect x="3" y="6" width="18" height="12" rx="2"/>
    <path d="M9 6v12M15 6v12M3 12h18"/>
  `),
  gelo: svgIcone(`
    <path d="M12 2v20M4 6.5l16 11M20 6.5 4 17.5"/>
    <path d="m9 4 3 2 3-2M9 20l3-2 3 2"/>
  `),
  frappe: svgIcone(`
    <path d="M5 8h13l-1.5 12h-10L5 8Z"/>
    <path d="M14 3 11 8"/>
  `),
  queijo: svgIcone(`
    <path d="M3 15 20 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z"/>
    <circle cx="9" cy="14" r="1"/><circle cx="15" cy="12" r="1"/>
  `),
  croissant: svgIcone(`
    <path d="M4 12c0-3.9 3.6-7 8-7s8 3.1 8 7c0 1.2-.8 2-2 2H6c-1.2 0-2-.8-2-2Z"/>
    <path d="M8 5.4V14M12 5v9M16 5.4V14"/>
  `),
  bolo: svgIcone(`
    <path d="M4 20h16M5 20v-7h14v7"/>
    <path d="M5 13c-1-1-1-3 1-3h12c2 0 2 2 1 3"/>
    <path d="M12 10V6"/>
  `),
  cookie: svgIcone(`
    <circle cx="12" cy="12" r="9"/>
    <circle cx="9" cy="9" r="1"/>
    <circle cx="15" cy="10" r="1.2"/>
    <circle cx="10" cy="15" r="1.2"/>
    <circle cx="15.5" cy="15" r="0.8"/>
  `),

  // Ações e navegação
  compartilhar: svgIcone(`
    <path d="M12 16V3M7 8l5-5 5 5"/>
    <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>
  `),
  camera: svgIcone(`
    <path d="M3 8h3l2-2h8l2 2h3v11H3V8Z"/>
    <circle cx="12" cy="13" r="3.5"/>
  `),
  trocar: svgIcone(`
    <path d="M20 11a8 8 0 0 0-14-5L4 8"/>
    <path d="M4 4v4h4"/>
    <path d="M4 13a8 8 0 0 0 14 5l2-2"/>
    <path d="M20 20v-4h-4"/>
  `),
  imagem: svgIcone(`
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <circle cx="8.5" cy="9" r="1.5"/>
    <path d="m21 16-5-5L5 20"/>
  `),
  recibo: svgIcone(`
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/>
    <path d="M9 8h6M9 12h6"/>
  `),
  lua: svgIcone(`
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>
  `),
  sol: svgIcone(`
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
  `),
  mais: svgIcone(`
    <path d="M12 5v14M5 12h14"/>
  `)
};

// Retorna o SVG de um ícone pelo nome
function icone(nome) {
  return ICONES[nome] || "";
}

// Troca todos os marcadores <span data-icone="nome"></span> do HTML pelo SVG.
// Os elementos criados pelo JavaScript usam a função icone() diretamente.
for (const marcador of document.querySelectorAll("[data-icone]")) {
  marcador.innerHTML = icone(marcador.dataset.icone);
}
