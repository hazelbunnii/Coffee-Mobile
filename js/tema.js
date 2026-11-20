// ==========================================================
// tema.js - modo escuro por padrão + botão para alternar
// Ao abrir, o app já entra no modo escuro. Se a pessoa tocar
// no botão do topo, a escolha é salva no localStorage e vale
// nas próximas aberturas (inclusive a volta ao claro).
// ==========================================================

const CHAVE_TEMA = "tema";

function temaAtual() {
  const salvo = localStorage.getItem(CHAVE_TEMA);
  return salvo === "claro" ? "claro" : "escuro"; // padrão = escuro
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

aplicarTema();
