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
// if (event.keyCode === 38 || // arrow up
//       event.keyCode === 40 || // arrow down
//       event.keyCode === 37 || // arrow left
//       event.keyCode === 39 || // arrow right
//       event.keyCode === 8) {  // backspace
//     // Не предотвращаем действие браузера
//   } else {
//     // Предотвращаем действие браузера для всех остальных клавиш
//     event.preventDefault();
//   }
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

document.addEventListener('keydown', (e) => {
  console.log(e);
});
