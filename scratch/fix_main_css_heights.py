with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\assets\main.css", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Capa page style
old_capa = """/* CAPA ACADÊMICA */
.capa-page {
  height: calc(297mm - 50mm); /* Compensa a margem no preview */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}"""

new_capa = """/* Espaçador de páginas na tela */
.page {
  margin-bottom: 30px;
  box-sizing: border-box;
}

/* CAPA ACADÊMICA */
.capa-page {
  height: 297mm !important; /* Capa deve ter exatamente altura A4 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}"""

content = content.replace(old_capa, new_capa)

# Replace Sumario page style
old_sumario = """/* SUMÁRIO ACADÊMICO */
.sumario-page {
  min-height: calc(297mm - 50mm);
}"""

new_sumario = """/* SUMÁRIO ACADÊMICO */
.sumario-page {
  /* Altura herdada de .a4-page */
}"""

content = content.replace(old_sumario, new_sumario)

# Replace Body page style
old_body = """/* PÁGINAS DE CONTEÚDO */
.body-page {
  min-height: calc(297mm - 50mm);
}"""

new_body = """/* PÁGINAS DE CONTEÚDO */
.body-page {
  /* Altura herdada de .a4-page */
}"""

content = content.replace(old_body, new_body)

with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\assets\main.css", "w", encoding="utf-8") as f:
    f.write(content)

print("main.css page heights fixed!")
