import { uploadFile } from './http-provider';

const body = document.querySelector('body');

let inputFile, imgFile;

const createInputFileHtml = () => {
    const html = `
        <h1 class="mb-3">Upload file</h1>
        <label>Select a image:</label>
        <input type="file" accept="image/png, image/jpeg"/>
        <img id="image" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.classList.add('container');

    div.innerHTML = html;

    body.appendChild(div);

    inputFile = document.querySelector('input');
    imgFile = document.querySelector('#image');
};

// Events
const events = () => {
    inputFile.addEventListener('change', event => {
        console.log(event.target.files);

        const file = event.target.files[0];

        uploadFile(file).then(url => {
            console.log(url);
            imgFile.src = url;
        });
    });
};

export const init = () => {
    createInputFileHtml();
    events();
};