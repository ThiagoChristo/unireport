with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\services\wordGenerator.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Fix imports
content = content.replace("    HeightRule", "")
content = content.replace(", type TableItem, type PlanejamentoItem, type CustoItem", "")

# Fix alignments
content = content.replace("AlignmentType.JUSTIFY", "AlignmentType.JUSTIFIED")

# Fix italic property
content = content.replace("italic: true", "italics: true")

with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\services\wordGenerator.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("wordGenerator.ts fixed successfully!")
