import { Key } from "./key.js";

export class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.isShiftPressed = false;
    this.isAltPressed = false;
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.container = document.createElement('div');
    this.container.classList.add('keyboard');
  }

  handleKeyDown(event) {
    if (event.key === 'Shift') {
      this.isShiftPressed = true;
    }
    if (event.key === 'Alt') {
      this.isAltPressed = true;
    }
    if (this.isShiftPressed && this.isAltPressed) {
      this.toggleLang();
    }
  }
  
  handleKeyUp(event) {
    if (event.key === 'Shift') {
      this.isShiftPressed = false;
    }
    if (event.key === 'Alt') {
      this.isAltPressed = false;
    }
  }
  

  generateEn() {
    const ROWS = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
      ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option','←', '↓', '→', 'Ctrl']
    ];

    for (let row of ROWS) {
      const divRow = document.createElement('div');
      divRow.classList.add('row');
      for (let key of row) {
        const keyElement = this.createKey(key);
        divRow.appendChild(keyElement);
        this.container.appendChild(divRow);
      }
      // const breakElement = document.createElement('br');
      // this.container.appendChild(breakElement);
    }
  }

  generateRu() {
    const ROWS = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',  '↑', 'Shift'],
      ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→', 'Ctrl']
    ];
    
    for (let row of ROWS) {
      const divRow = document.createElement('div');
      divRow.classList.add('row');

      for (let key of row) {
        const keyElement = this.createKey(key);
        divRow.appendChild(keyElement);
        this.container.appendChild(divRow);
      }
      //const breakElement = document.createElement('br');
      //this.container.appendChild(breakElement);
    }
  }

  toggleLang() {
    this.lang = this.lang === 'eng' ? 'ru' : 'eng';
    this.container.innerHTML = '';
    this.generateKeyboard(this.lang);
  }

  generateKeyboard() {
    const BODY = document.querySelector('body');
    BODY.appendChild(this.container);
    this.lang === 'eng' ? this.generateEn() : this.generateRu();
  }

  createKey(key) {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.classList.add('key');
    keyElement.dataset.code = key;

    switch (key) {
      case 'Backspace':
        keyElement.classList.add('backspace');
        keyElement.dataset.code = 'Backspace';
        break;
      case 'Tab':
        keyElement.classList.add('tab');
        keyElement.dataset.code = 'Tab';
        break;
      case 'Option':
          keyElement.classList.add('alt');
          keyElement.dataset.code = 'Alt';
          break;
      case 'CapsLock':
        keyElement.classList.add('caps-lock');
        keyElement.dataset.code = 'CapsLock';
        break;
      case 'Enter':
        keyElement.classList.add('enter');
        keyElement.dataset.code = 'Enter';
        break;
      case 'Shift':
        keyElement.classList.add('shift');
        keyElement.dataset.code = 'Shift';
        // keyElement.addEventListener('click', () => {
        //   // this.toggleLang();
        // });
        break;
      case 'Ctrl':
        keyElement.classList.add('ctrl');
        keyElement.dataset.code = 'ControlLeft';
        break;
        case ' ':
        keyElement.classList.add('space');
        keyElement.dataset.code = 'Space';
        break;
        case 'Command':
        keyElement.classList.add('command');
        keyElement.dataset.code = 'Command';
        break;
    }
    return keyElement;
  }
}