import { Keyboard } from "./keyboard.js";
const ROOT = document.createElement('div');
ROOT.classList.add('root');
const BODY = document.querySelector('body');
BODY.appendChild(ROOT);
const keyboard = new Keyboard(';');
keyboard.generateKeyboard();
document.addEventListener('keydown', (event) => {
  console.log(event.key)
})