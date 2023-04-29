import { Keyboard } from "./keyboard.js";
const ROOT = document.createElement('div');
ROOT.classList.add('root');
const BODY = document.querySelector('body');
const text = document.createElement('textarea');
text.classList.add('text');
BODY.appendChild(text);
const keyboard = new Keyboard('ru', text);
keyboard.generateKeyboard();
text.addEventListener('keydown', (event) => {
  event.preventDefault()
})
document.addEventListener('keydown', (e) => {
  console.log(e);
});
