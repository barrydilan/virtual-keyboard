// eslint-disable-next-line import/extensions
import { Keyboard } from './keyboard.js';

const BODY = document.querySelector('body');
const text = document.createElement('textarea');
text.classList.add('text');
text.setAttribute(
  'placeholder',
  'Shift + Option (Shift + Alt on Windows). The work has been done on Mac OS.',
);
BODY.appendChild(text);
const userLanguage = localStorage.getItem('userLanguage') || 'en';
const keyboard = new Keyboard(userLanguage, text);
keyboard.generateKeyboard();

text.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // Perform the desired action when the up arrow is pressed
    text.value += '↑';
    event.preventDefault();
  } else if (event.key === 'ArrowDown') {
    // Perform the desired action when the down arrow is pressed
    text.value += '↓';
    event.preventDefault();
  } else if (event.key === 'ArrowLeft') {
    // Perform the desired action when the left arrow is pressed
    text.value += '←';
    event.preventDefault();
  } else if (event.key === 'ArrowRight') {
    // Perform the desired action when the right arrow is pressed
    text.value += '→';
    event.preventDefault();
  } else {
    event.preventDefault();
  }
});

// const Tab = document.querySelector(`[data-code="Tab"]`);
// Tab.addEventListener('click', () => {
//   text.value +=  '    ';
// })

// const Enter = document.querySelector(`[data-code="Enter"]`);
// Enter.addEventListener('click', () => {
//   text.value +=  '\n';
// })

// const Backspace = document.querySelector(`[data-code="Backspace"]`);
// Backspace.addEventListener('click', () => {
//   text.value = text.value.slice(0, -1);
// })

// const Space = document.querySelector(`[data-code="Space"]`);
// Space.addEventListener('click', () => {
//   text.value +=  ' ';
// })
// const CapsLock = document.querySelector(`[data-code="CapsLock"]`);
// CapsLock.addEventListener('click', () => {
//   console.log(keyboard.isCapsPressed)
//   keyboard.isCapsPressed = !keyboard.isCapsPressed;
//   console.log(keyboard.isCapsPressed)
//   if (keyboard.isCapsPressed) {
//     keyboard.toggleCaps();
//   }
//   else {
//     keyboard.generateKeyboard();
//   }}
// )
