//APIs
document.getElementById('submitFileBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    const files = document.getElementById('file').files;

    if(!files[0]){
        return displayTextLog('text-log-error', 'No file selected')
    }
    
    let formData = new FormData();
    formData.append('file', files[0]);

    document.getElementById("outputText").innerHTML = "Translating ...";

    fetch('/translate', {
        method: 'POST',
        body: formData
    }).then(res => res.json())
    .then(res => {
        document.getElementById("outputText").innerHTML = res.text;
    })
})

//Events handlers
let fileInput = document.getElementsByClassName('file-input')[0];
let fileInputImage = document.getElementById('file-input-image')
fileInput.addEventListener("dragover", (e) => {
    e.preventDefault();
    fileInput.classList.add('file-input-ondrag');
    fileInputImage.src = '/assets/image/filedrop.png';
})
fileInput.addEventListener("dragleave", (e) => {
    e.preventDefault();
    fileInput.classList.remove('file-input-ondrag');
    fileInputImage.src = '/assets/image/upload.png';
})
fileInput.addEventListener("drop", (e) => {
    fileInput.classList.remove('file-input-ondrag')
    document.getElementById('file').files = e.dataTransfer.files;
    document.getElementById('outputText').innerHTML = document.getElementById('file').files[0].name;
    e.preventDefault();
})

let submitBtn = document.getElementById('submitFileBtn');