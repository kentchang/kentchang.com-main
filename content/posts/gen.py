import subprocess
import json
import datetime
import pytz
import os

MARKDOWN_TEMPLATE = """
---
title: \"{title}\"
date:  \"{date}\"
slug:  \"{slug}\"
tags:  
  - \"{tags}\"
---

"""

TEX_PDF_TEMPLATE = """
% !TEX TS-program = XeLaTeX
\\documentclass[11pt,a4paper]{{article}}

\\input{{../preamble}}
\\begin{{document}}
\\noindent{{\\sffamily\\firstHeaderL \\hfill \\firstHeaderR}}
\\vspace{{5pt}}
\\noindent\\rule[2ex]{{\\columnwidth}}{{0.5pt}}
\\newcommand{{\\docTitle}}{{{title}}}
\\newcommand{{\\docDate}}{{{doc_date}}}
\\newcommand{{\\docURL}}[1]{{\\url{{https://kentchang.com/#1/}}}}

\\title{{\\LARGE\\sffamily{{\\docTitle}}
\\author{{\\authorInfo}}
\\date{{\\docDate}}
{{\\let\\newpage\\relax\\maketitle}}
\\vspace*{{0.5em}}
\\noindent \\textsc{{url}}: \\docURL{{{slug}}}

\\noindent\\hrulefill

\\input{{{tex_content_filename}}}
\\printbibliography

\\end{{document}}

"""

title = input("Title: ")
slug = input("Slug: ")
tags = input("Tag: ")
date = datetime.datetime.now(pytz.timezone("Europe/London")).isoformat()
today = datetime.datetime.today()
doc_date = today.strftime("%B %d, %Y %I:%M:%S%p")

# folder_name = "{}-{:0>2}-{:0>2}-{}".format(today.year, today.month, today.day, slug)
folder_name = "{}".format(slug)

md_header_filename = "{}-header.md".format(slug)
md_header_create = folder_name + '/' + md_header_filename
md_header_create_content = MARKDOWN_TEMPLATE.strip().format(title=title, date=date, slug=slug, tags=tags)

os.makedirs(os.path.dirname(md_header_create), exist_ok=True)
with open(md_header_create, 'w') as md_header_file:
    md_header_file.write(md_header_create_content + '\n\n')
print("File created -> " + md_header_create)

md_filename = "{}.md".format(slug)
md_create = folder_name + '/' + md_filename

os.makedirs(os.path.dirname(md_create), exist_ok=True)
with open(md_create, 'w') as md_file:
    md_file.write('')
print("File created -> " + md_create)

###################################################

tex_pdf_filename = "{}-pdf.tex".format(slug)
tex_pdf_create = folder_name + '/' + tex_pdf_filename
tex_content_filename = "{}-content.tex".format(slug)
tex_content_create = folder_name + '/' + tex_content_filename

tex_pdf_create_content = TEX_PDF_TEMPLATE.strip().format(title=title, doc_date=doc_date, slug=slug, tex_content_filename=tex_content_filename)
os.makedirs(os.path.dirname(tex_pdf_create), exist_ok=True)
with open(tex_pdf_create, 'w') as tex_pdf_file:
    tex_pdf_file.write(tex_pdf_create_content)
print("File created -> " + tex_pdf_create)

os.makedirs(os.path.dirname(tex_content_create), exist_ok=True)
with open(tex_content_create, 'w') as tex_content_file:
    tex_content_file.write('')
print("File created -> " + tex_content_create)
