//APIs
document.getElementById('submitFileBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const file = document.getElementById('file').files[0];
    
    let formData = new FormData();
    formData.append('file', file);

    document.getElementById('outputText').innerHTML = 'Translating ... ';

    fetch('/translate', {
        method: 'POST',
        body: formData
    }).then(res => res.json())
    .then(res => {
        document.getElementById('outputText').innerHTML = res.text;
    });
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
let submitBtnFilter = document.getElementById('submitBtnFilter');
submitBtn.addEventListener("mouseover", (e) => {
    submitBtnFilter.classList.add('button-hover-filter-start');
})
