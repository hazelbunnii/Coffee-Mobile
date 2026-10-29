# Prints da documentação

Salve os prints nesta pasta com **exatamente** estes nomes, para aparecerem no `README.md`:

| Arquivo | O que mostrar |
|---|---|
| `4.2-galeria.png` | Galeria com as fotos em 1080 px / 0.95 (e, se possível, o aviso de galeria cheia) |
| `4.3-prompt.png` | A caixinha "Legenda da foto:" aberta |
| `4.3-galeria.png` | Miniatura com a legenda embaixo (no lugar da data) |
| `4.4-contador.png` | O título "Galeria (N)" com as fotos |

Formatos aceitos: `.png` ou `.jpg` (se usar `.jpg`, ajuste o nome no `README.md`).

Como enviar:

**Opção 1 — pelo PC (recomendado)**

1. Passe os prints do celular para o PC (cabo USB, Google Drive, WhatsApp "Mensagens para mim").
2. Copie para esta pasta com os nomes acima.
3. No terminal, dentro da pasta do projeto:

```powershell
git add -A
git commit -m "Adiciona prints da documentacao"
git push
```

**Opção 2 — direto pelo celular**

No navegador, abra o repositório no GitHub → pasta `docs/img` → **Add file** →
**Upload files** → escolha os prints → renomeie com os nomes da tabela → **Commit changes**.
