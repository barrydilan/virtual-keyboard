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
//   if (!event.code.startsWith('Arrow')) {
//     // блокируем ввод символов с физической клавиатуры
//     event.preventDefault();
//   }
if (event.keyCode === 38 || // arrow up
      event.keyCode === 40 || // arrow down
      event.keyCode === 37 || // arrow left
      event.keyCode === 39 || // arrow right
      event.keyCode === 8) {  // backspace
    // Не предотвращаем действие браузера
  } else {
    // Предотвращаем действие браузера для всех остальных клавиш
    event.preventDefault();
  }
});

document.addEventListener('keydown', (e) => {
  console.log(e);
});
