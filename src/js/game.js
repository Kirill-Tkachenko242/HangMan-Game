import {WORDS} from './consts'
import { KEYBOARD_LETTERS } from './consts';

const gameDiv = document.getElementById('game');

const createPlaceholdersHTML = () => {
    const word = sessionStorage.getItem('word');

    //use letter
    // const wordArray = Array.from(word)
    // const placeholdersHTML = wordArray.reduce((acc, curr, i) => acc + 
    // `<h1 id="letter_${i}" class="letter"> _ </h1>`, ``)

    //use _
    const placeholdersArray = Array.from('_'.repeat(word.length));
    const placeholdersHTML = placeholdersArray.reduce((acc, curr, i) => acc + 
    `<h1 id="letter_${i}" class="letter"> ${curr} </h1>`, ``);
    return `<div id="placeholders" class="placeholders-wrapper">${placeholdersHTML}</div>`
};

const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard')
    keyboard.id = 'keyboard'

    const keyboardHTML = KEYBOARD_LETTERS.reduce((acc, curr) => {
        return acc + `<button class="button-primary" id="${curr}"> ${curr}</button>`
    }, ``)

    keyboard.innerHTML = keyboardHTML;
    return keyboard;
}

export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const WordToGuess = WORDS[randomIndex]
    const keyboardDiv = createKeyboard();
    sessionStorage.setItem('word', WordToGuess)
    // Marth.random() // from 0 to 1
    gameDiv.innerHTML = createPlaceholdersHTML()
    gameDiv.appendChild(keyboardDiv)
};

console.log(KEYBOARD_LETTERS);