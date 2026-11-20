// ==========================================================
// tema.js - modo escuro automático + botão para alternar
// Por padrão segue a preferência do sistema (prefers-color-scheme).
// Se a pessoa escolher um tema no botão, a escolha é salva e
// passa a valer também quando o app reabrir.
// ==========================================================

const CHAVE_TEMA = "tema"; // "claro", "escuro" ou null = seguir o sistema

const consultaEscuro = window.matchMedia("(prefers-color-scheme: dark)");

function temaDoSistema() {
  return consultaEscuro.matches ? "escuro" : "claro";
}

function temaAtual() {
  const salvo = localStorage.getItem(CHAVE_TEMA);
  if (salvo === "claro" || salvo === "escuro") {
    return salvo;
  }
  return temaDoSistema();
}

function aplicarTema() {
  const tema = temaAtual();

  // O CSS lê este atributo no <html> para trocar as cores
  document.documentElement.setAttribute("data-tema", tema);

  // Atualiza a cor da barra do navegador / do app instalado (PWA)
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", tema === "escuro" ? "#241a14" : "#6f4e37");
  }

  // Troca o ícone do botão: lua para ir ao escuro, sol para voltar ao claro
  const botao = document.querySelector("#btn-tema");
  if (botao) {
    botao.innerHTML = icone(tema === "escuro" ? "sol" : "lua");
    botao.setAttribute(
      "aria-label",
      tema === "escuro" ? "Ativar modo claro" : "Ativar modo escuro"
    );
  }
}

document.querySelector("#btn-tema").addEventListener("click", function () {
  const proximo = temaAtual() === "escuro" ? "claro" : "escuro";
  localStorage.setItem(CHAVE_TEMA, proximo);
  aplicarTema();
});

// Se não houve escolha manual, acompanha o sistema em tempo real
function aoMudarSistema() {
  if (!localStorage.getItem(CHAVE_TEMA)) {
    aplicarTema();
  }
}

if (consultaEscuro.addEventListener) {
  consultaEscuro.addEventListener("change", aoMudarSistema);
} else if (consultaEscuro.addListener) {
  consultaEscuro.addListener(aoMudarSistema); // iPhones mais antigos
}

aplicarTema();
