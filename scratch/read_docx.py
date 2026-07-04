import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def docx_to_txt(docx_path):
    if not os.path.exists(docx_path):
        print(f"File not found: {docx_path}")
        return
        
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Find all paragraphs
            paragraphs = []
            for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = [node.text for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
                else:
                    paragraphs.append('') # empty line for empty paragraph
            
            return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

if __name__ == '__main__':
    # Adjust this path if the docx file is moved
    path = r"d:\engsoftware\proj_interdisciplinar\relatorio-real\Relatorio - Projeto Integrador I - 2026.docx"
    content = docx_to_txt(path)
    output_path = r"d:\engsoftware\proj_interdisciplinar\relatorio-real\Relatorio_Modelo.md"
    if content:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Saved content to {output_path}")
