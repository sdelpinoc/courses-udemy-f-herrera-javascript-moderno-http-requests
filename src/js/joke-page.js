import { getJoke } from "./http-provider";

const body = document.querySelector('body');

let btnGetJoke, olListJokes;

const createJokeHtml = () => {
    const html = `
        <h1 class="mt-5">Jokes</h1>
        <button class="btn btn-primary">Get joke</button>
        <ol class="mt-2 list-group"></ol>
    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
};

const events = () => {
    olListJokes = document.querySelector('ol');
    btnGetJoke = document.querySelector('.btn-primary');

    btnGetJoke.addEventListener('click', async() => {
        btnGetJoke.disable = true;
        addJokeHtml(await getJoke());
        btnGetJoke.disable = false;
    });
};

const addJokeHtml = (joke) => {
    const olItem = document.createElement('li');

    const jokeNumber = document.querySelectorAll('li').length + 1;
    
    olItem.innerHTML = `
        <i>${jokeNumber}. </i><b>${joke.id}</b>: ${joke.value}
    `;

    olItem.classList.add('list-group-item');

    olListJokes.append(olItem);
};

const init = () => {
    createJokeHtml();
    events();
};

export {
    init
}