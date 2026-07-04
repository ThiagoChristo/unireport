with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\components\Preview.vue", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the outer container and document wrapper
old_wrapper = """    <!-- Container da Folha A4 -->
    <div class="flex-1 overflow-y-auto p-8 flex justify-center bg-slate-950">
      <div id="report-document" class="a4-page font-arial shadow-2xl shadow-black/80">"""

new_wrapper = """    <!-- Container da Folha A4 -->
    <div id="report-document" class="flex-1 overflow-y-auto p-8 bg-slate-950 flex flex-col items-center gap-8">"""

content = content.replace(old_wrapper, new_wrapper)

# Replace the closing div
old_closing = """      </div>
    </div>
  </aside>
</template>"""

new_closing = """    </div>
  </aside>
</template>"""

content = content.replace(old_closing, new_closing)

# Replace page divs to make each page its own A4 sheet
content = content.replace('<div class="page capa-page">', '<div class="a4-page page capa-page font-arial shadow-2xl shadow-black/80">')
content = content.replace('<div class="page sumario-page">', '<div class="a4-page page sumario-page font-arial shadow-2xl shadow-black/80">')
content = content.replace('<div class="page body-page">', '<div class="a4-page page body-page font-arial shadow-2xl shadow-black/80">')

with open(r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\components\Preview.vue", "w", encoding="utf-8") as f:
    f.write(content)

print("Preview.vue pages refactored!")
