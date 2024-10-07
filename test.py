from js import document, Blob, URL, window
from pyodide import create_proxy
# from pyscript import *

def runPython(event):

    file_content = "Hello, this is a new file!"
    filename = "newfile.txt"

    blob = Blob.new([file_content], {'type': 'text/plain'})
    link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

function_proxy = create_proxy(runPython)

document.getElementById("programBtn").addEventListener("click", function_proxy)