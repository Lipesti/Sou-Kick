import pandas as pd
import textwrap
import matplotlib.pyplot as plt
import seaborn as sns
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

df = pd.read_csv('PDA_Cursos.csv', encoding='latin1')
pdf = canvas.Canvas('grafico1.pdf', pagesize=letter)

plt.figure(figsize=(10, 6))
sns.countplot(data=df, x='REGIAO')
plt.title('Distribuição de Faculdades por Região')
plt.ylabel('Contagem')
plt.xticks(rotation=18)

plt.savefig('grafico1.png')
pdf.drawInlineImage('grafico1.png', 40, 350, width=500, height=450)

pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, 280, 'Gráfico 1: Distribuição de Faculdades por Região')

pdf.setFont("Helvetica", 12)
text = 'A distribuição de faculdades por região no Brasil está intrinsecamente ligada à desigualdade educacional no país. A região Sudeste concentra a maioria das faculdades, o que amplia as oportunidades de acesso ao ensino superior nessa região. Por outro lado, regiões como o Norte e o Nordeste possuem uma quantidade significativamente menor de instituições de ensino superior, o que contribui para a desigualdade educacional entre as regiões. Essa disparidade geográfica no acesso à educação superior reflete-se na distribuição desigual de oportunidades de formação acadêmica.'

lines = textwrap.wrap(text, width=50)

y = 250
for line in lines:
    line_width = pdf.stringWidth(line, "Helvetica", 12)
    x = (letter[0] - line_width) / 2
    pdf.drawString(x, y, line)
    y -= 20

pdf.save()

df = pd.read_csv('PDA_Cursos.csv')
pdf = canvas.Canvas('grafico2.pdf', pagesize=letter)

plt.figure(figsize=(10, 6))
sns.countplot(data=df, x='CATEGORIA_ADMINISTRATIVA')
plt.title('Distribuição por Categoria Administrativa')
plt.ylabel('Contagem')
plt.xticks(rotation=8)

plt.savefig('grafico2.png')
pdf.drawInlineImage('grafico2.png', 40, 350, width=500, height=450)

pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, 280, 'Gráfico 2: Distribuição por Categoria Administrativa')

pdf.setFont("Helvetica", 12)
text = 'A distribuição por categoria administrativa mostra a diversidade das instituições de ensino superior no Brasil, incluindo universidades federais, estaduais e privadas. Além dessas categorias, também existem faculdades públicas municipais, que são instituições de ensino superior mantidas pelo poder público municipal. Essas faculdades desempenham um papel importante na oferta de cursos de graduação e pós-graduação em nível local, contribuindo para a formação acadêmica e profissional dos estudantes em suas respectivas regiões.'

lines = textwrap.wrap(text, width=50)

y = 250
for line in lines:
    line_width = pdf.stringWidth(line, "Helvetica", 12)
    x = (letter[0] - line_width) / 2
    pdf.drawString(x, y, line)
    y -= 20

pdf.save()

