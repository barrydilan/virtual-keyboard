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
      this.toggleCase()
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
      this.toggleCase()
    }
    if (event.key === 'Alt') {
      this.isAltPressed = false;
    }
  }
  
  ROWS_EN = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option','←', '↓', '→', 'Ctrl']
  ];
  ROWS_EN_UPP  = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'], 
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
    ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option','←', '↓', '→', 'Ctrl']
  ];
  ROWS_RU = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\/'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',',  '↑', 'Shift'],
  ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→', 'Ctrl']
  ];
  ROWS_RU_UPP = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.',  '↑', 'Shift'],
  ['Ctrl', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→', 'Ctrl']
  ];

  generate(ROWS) {
    for (let row of ROWS) {
      const divRow = document.createElement('div');
      divRow.classList.add('row');
      for (let key of row) {
        const keyElement = this.createKey(key);
        divRow.appendChild(keyElement);
        this.container.appendChild(divRow);
      }
   }
  }

  toggleCase() {
    this.container.innerHTML = '';
    if (this.lang !== 'eng') {
      this.generate(this.isShiftPressed ? this.ROWS_RU_UPP : this.ROWS_RU);
    } else {
      this.generate(this.isShiftPressed ? this.ROWS_EN_UPP : this.ROWS_EN);
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
    this.lang === 'eng' ? this.generate(this.ROWS_EN) : this.generate(this.ROWS_RU);
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