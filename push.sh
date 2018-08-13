#!/bin/sh

git add .
git commit -m "add: $1"
git push -u origin master
