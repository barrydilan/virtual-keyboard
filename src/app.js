import { Keyboard } from "./keyboard.js";
const ROOT = document.createElement('div');
ROOT.classList.add('root');
const BODY = document.querySelector('body');
const text = document.createElement('textarea');
text.classList.add('text');
BODY.appendChild(text);
const userLanguage = localStorage.getItem('userLanguage') || 'en';
const keyboard = new Keyboard(userLanguage, text);
keyboard.generateKeyboard();


text.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // Perform the desired action when the up arrow is pressed
    console.log('Up arrow pressed');
    text.value +=  '↑'
    event.preventDefault();

  } else if (event.key === 'ArrowDown') {
    // Perform the desired action when the down arrow is pressed
    text.value +=  '↓'
    event.preventDefault();

    console.log('Down arrow pressed');
  } else if (event.key === 'ArrowLeft') {
    // Perform the desired action when the left arrow is pressed
    text.value +=  '←'
    event.preventDefault();

    console.log('Left arrow pressed');
  } else if (event.key === 'ArrowRight') {
    // Perform the desired action when the right arrow is pressed
    text.value +=  '→'
    event.preventDefault();

    console.log('Right arrow pressed');
  } else {
    event.preventDefault();

  }
});

const Tab = document.querySelector(`[data-code="Tab"]`);
Tab.addEventListener('click', () => {
  text.value +=  '    ';
})


