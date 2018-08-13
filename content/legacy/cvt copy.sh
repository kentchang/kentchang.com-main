#!/bin/sh

pandoc $1.tex -o $1.md --bibliography ../../docs/course-2.bib
pandoc -t markdown_strict --filter=pandoc-citeproc --standalone --bibliography ../../docs/course-2.bib $1.md -o $1-out.md
