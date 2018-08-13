import subprocess
import datetime
# https://stackoverflow.com/questions/431684/how-do-i-change-directory-cd-in-python
import os

class cd:
    """Context manager for changing the current working directory"""
    def __init__(self, newPath):
        self.newPath = os.path.expanduser(newPath)

    def __enter__(self):
        self.savedPath = os.getcwd()
        os.chdir(self.newPath)

    def __exit__(self, etype, value, traceback):
        os.chdir(self.savedPath)

slug = input("Give the slug of this post you have eventually finished omg LOL: ")
push_time = datetime.datetime.today().strftime("%B %d, %Y %I:%M:%S%p")


commands = [
    "/usr/local/bin/pandoc " + slug + "-content.tex -o " + slug + "-content-temp.md --bibliography ../general.bib",
    "/usr/local/bin/pandoc -t markdown_strict --filter=pandoc-citeproc --standalone --bibliography ../general.bib " + slug + "-content-temp.md -o " + slug + "-content.md",
]


with cd(slug):
    for command in commands:
        subprocess.run(command.split())
    # https://stackoverflow.com/questions/4965159/python-how-to-redirect-output-with-subprocess
    input_files = [slug + '-header.md', slug + '-content.md']
    output_command = ['/bin/cat'] + input_files
    with open(slug + '.md', "w") as outfile:
        subprocess.run(output_command, stdout=outfile)

    delete_files = [slug + '-header.md', slug + '-content.md', slug + '-content-temp.md']
    clean_command = ['/bin/rm'] + delete_files 
    subprocess.run(clean_command)