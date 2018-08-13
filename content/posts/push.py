import subprocess
import datetime
import os 

slug = input("Give the slug of this post you have eventually finished omg LOL: ")
# push_time = datetime.datetime.today().strftime("%B %d, %Y %I:%M:%S%p")


commands = [
    'git add .',
    'git commit -m \"add: ' + slug + '\"',
    "git push -u origin master"
]

class cd:
    """Context manager for changing the current working directory"""
    def __init__(self, newPath):
        self.newPath = os.path.expanduser(newPath)

    def __enter__(self):
        self.savedPath = os.getcwd()
        os.chdir(self.newPath)

    def __exit__(self, etype, value, traceback):
        os.chdir(self.savedPath)

with cd("~/dev/gatstrap2"):
    for command in commands:
        subprocess.run(command.split())


# subprocess.call(cmd1)
# subprocess.call(cmd2)
