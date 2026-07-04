import os

base_dir = r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\components\forms"
files = [
    "ConclusaoForm.vue",
    "IngressoForm.vue",
    "ProfissaoForm.vue",
    "ReferenciasForm.vue",
    "RelacaoForm.vue",
    "TendenciasForm.vue"
]

for name in files:
    path = os.path.join(base_dir, name)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Substitui (item, idx) por (_, idx)
        new_content = content.replace("(item, idx)", "(_, idx)")
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed unused 'item' in {name}")
print("Finished fixing unused items!")
