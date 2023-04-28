import { Key } from "./key.js";

// export class Keyboard {
//   constructor(lang) {
//     this.lang = lang;
//     this.container = document.createElement('div');
//     this.container.classList.add('keyboard');
//   }

//   generateEn() {
//     for (let i = 0; i < 26; i++) {
//       const key = new Key(String.fromCharCode(65 + i), i+1, 50, 50); // Use fromCharCode to get the alphabet letter corresponding to the ASCII code, starting from A (65).
//       key.render(this.container);
//     }
//   }
//   generateRu() {
//     for (let i = 0; i < 32; i++) {
//       const key = new Key(String.fromCharCode(1040 + i), i+1, 50, 50); // Use fromCharCode to get the Cyrillic alphabet letter corresponding to the Unicode code point, starting from А (1040).
//       key.render(this.container);
//     }
//   }    

//   generateKeyboard(lang) {
//     const BODY = document.querySelector('body');
//     BODY.appendChild(this.container);
//     lang === 'eng' ? this.generateEn() : this.generateRu();
//   }

// }

export class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.container = document.createElement('div');
    this.container.classList.add('keyboard');
  }

  generateEn() {
    const ROWS = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl']
    ];

    for (let row of ROWS) {
      for (let key of row) {
        const keyElement = this.createKey(key);
        this.container.appendChild(keyElement);
      }
      const breakElement = document.createElement('br');
      this.container.appendChild(breakElement);
    }
  }

  generateRu() {
    const ROWS = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
      ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift'],
      ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl']
    ];
  
    for (let row of ROWS) {
      for (let key of row) {
        const keyElement = this.createKey(key);
        this.container.appendChild(keyElement);
      }
      const breakElement = document.createElement('br');
      this.container.appendChild(breakElement);
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
        keyElement.addEventListener('click', () => {
          this.toggleLang();
        });
        break;
      case 'Ctrl':
        keyElement.classList.add
        keyElement.dataset.code = 'ControlLeft';
        break;
    }
    return keyElement;
  }
}