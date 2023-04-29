import { Key } from "./key.js";

export class Keyboard {
  constructor(lang, textArea) {
    this.textArea = textArea;
    this.lang = lang;
    this.isShiftPressed = false;
    this.isAltPressed = false;
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.container = document.createElement('div');
    this.container.classList.add('keyboard');
  }
  charMap = {
    en: {
      KeyA: 'a',
      KeyB: 'b',
      KeyC: 'c',
      KeyD: 'd',
      KeyE: 'e',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyI: 'i',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      KeyM: 'm',
      KeyN: 'n',
      KeyO: 'o',
      KeyP: 'p',
      KeyQ: 'q',
      KeyR: 'r',
      KeyS: 's',
      KeyT: 't',
      KeyU: 'u',
      KeyV: 'v',
      KeyW: 'w',
      KeyX: 'x',
      KeyY: 'y',
      KeyZ: 'z',
      Backquote: '`',
      Backslash: '\\',
      BracketLeft: '[',
      BracketRight: ']',
      Comma: ',',
      Digit0: '0',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Equal: '=',
      Minus: '-',
      Period: '.',
      Quote: "'",
      Semicolon: ';',
      Slash: '/'
    },
    ru: {
      KeyA: 'ф',
      KeyB: 'и',
      KeyC: 'с',
      KeyD: 'в',
      KeyE: 'у',
      KeyF: 'а',
      KeyG: 'п',
      KeyH: 'р',
      KeyI: 'ш',
      KeyJ: 'о',
      KeyK: 'л',
      KeyL: 'д',
      KeyM: 'ь',
      KeyN: 'т',
      KeyO: 'щ',
      KeyP: 'з',
      KeyQ: 'й',
      KeyR: 'к',
      KeyS: 'ы',
      KeyT: 'е',
      KeyU: 'г',
      KeyV: 'м',
      KeyW: 'ц',
      KeyX: 'ч',
      KeyY: 'н',
      KeyZ: 'я',
      Backquote: 'ё',
      Backslash: '\/',
      BracketLeft: 'х',
      BracketRight: 'ъ',
      Comma: 'б',
      Digit0: '0',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Equal: '=',
      Minus: '-',
      Period: 'ю',
      Quote: "э",
      Semicolon: ';',
      Slash: '.'
    },

  };
  // charMapUpper = {
  //   en: {
  //     KeyA: 'A',
  //     KeyB: 'B',
  //     KeyC: 'C',
  //     KeyD: 'D',
  //     KeyE: 'E',
  //     KeyF: 'F',
  //     KeyG: 'G',
  //     KeyH: 'H',
  //     KeyI: 'I',
  //     KeyJ: 'J',
  //     KeyK: 'K',
  //     KeyL: 'L',
  //     KeyM: 'M',
  //     KeyN: 'N',
  //     KeyO: 'O',
  //     KeyP: 'P',
  //     KeyQ: 'Q',
  //     KeyR: 'R',
  //     KeyS: 'S',
  //     KeyT: 'T',
  //     KeyU: 'U',
  //     KeyV: 'V',
  //     KeyW: 'W',
  //     KeyX: 'X',
  //     KeyY: 'Y',
  //     KeyZ: 'Z',
  //     Backquote: '`',
  //     Backslash: '\\',
  //     BracketLeft: '[',
  //     BracketRight: ']',
  //     Comma: ',',
  //     Digit0: '0',
  //     Digit1: '1',
  //     Digit2: '2',
  //     Digit3: '3',
  //     Digit4: '4',
  //     Digit5: '5',
  //     Digit6: '6',
  //     Digit7: '7',
  //     Digit8: '8',
  //     Digit9: '9',
  //     Equal: '=',
  //     Minus: '-',
  //     Period: '.',
  //     Quote: "'",
  //     Semicolon: ';',
  //     Slash: '/'
  //   },
  //   ru: {
  //     KeyA: 'Ф',
  //     KeyB: 'И',
  //     KeyC: 'С',
  //     KeyD: 'В',
  //     KeyE: 'У',
  //     KeyF: 'А',
  //     KeyG: 'П',
  //     KeyH: 'Р',
  //     KeyI: 'Ш',
  //     KeyJ: 'О',
  //     KeyK: 'Л',
  //     KeyL: 'Д',
  //     KeyM: 'Ь',
  //     KeyN: 'Т',
  //     KeyO: 'Щ',
  //     KeyP: 'З',
  //     KeyQ: 'Й',
  //     KeyR: 'К',
  //     KeyS: 'Ы',
  //     KeyT: 'Е',
  //     KeyU: 'Г',
  //     KeyV: 'М',
  //     KeyW: 'Ц',
  //     KeyX: 'Ч',
  //     KeyY: 'Н',
  //     KeyZ: 'Я',
  //     Backquote: 'Ё',
  //     Backslash: '\/',
  //     BracketLeft: 'Х',
  //     BracketRight: 'Ъ',
  //     Comma: 'Б',
  //     Digit0: '0',
  //     Digit1: '1',
  //     Digit2: '2',
  //     Digit3: '3',
  //     Digit4: '4',
  //     Digit5: '5',
  //     Digit6: '6',
  //     Digit7: '7',
  //     Digit8: '8',
  //     Digit9: '9',
  //     Equal: '=',
  //     Minus: '-',
  //     Period: 'Ю',
  //     Quote: "Э",
  //     Semicolon: ';',
  //     Slash: '.'
  //   }
  // };
  charMapUpper = {
    en: {
      KeyA: 'A',
      KeyB: 'B',
      KeyC: 'C',
      KeyD: 'D',
      KeyE: 'E',
      KeyF: 'F',
      KeyG: 'G',
      KeyH: 'H',
      KeyI: 'I',
      KeyJ: 'J',
      KeyK: 'K',
      KeyL: 'L',
      KeyM: 'M',
      KeyN: 'N',
      KeyO: 'O',
      KeyP: 'P',
      KeyQ: 'Q',
      KeyR: 'R',
      KeyS: 'S',
      KeyT: 'T',
      KeyU: 'U',
      KeyV: 'V',
      KeyW: 'W',
      KeyX: 'X',
      KeyY: 'Y',
      KeyZ: 'Z',
      Backquote: '~',
      Backslash: '|',
      BracketLeft: '{',
      BracketRight: '}',
      Comma: '<',
      Digit0: ')',
      Digit1: '!',
      Digit2: '@',
      Digit3: '#',
      Digit4: '$',
      Digit5: '%',
      Digit6: '^',
      Digit7: '&',
      Digit8: '*',
      Digit9: '(',
      Equal: '+',
      Minus: '_',
      Period: '>',
      Quote: '"',
      Semicolon: ':',
      Slash: '?'
    },
    ru: {
      KeyA: 'Ф',
      KeyB: 'И',
      KeyC: 'С',
      KeyD: 'В',
      KeyE: 'У',
      KeyF: 'А',
      KeyG: 'П',
      KeyH: 'Р',
      KeyI: 'Ш',
      KeyJ: 'О',
      KeyK: 'Л',
      KeyL: 'Д',
      KeyM: 'Ь',
      KeyN: 'Т',
      KeyO: 'Щ',
      KeyP: 'З',
      KeyQ: 'Й',
      KeyR: 'К',
      KeyS: 'Ы',
      KeyT: 'Е',
      KeyU: 'Г',
      KeyV: 'М',
      KeyW: 'Ц',
      KeyX: 'Ч',
      KeyY: 'Н',
      KeyZ: 'Я',
      Backquote: 'Ё',
      Backslash: '|',
      BracketLeft: 'Х',
      BracketRight: 'Ъ',
      Comma: 'Б',
      Digit0: ')',
      Digit1: '!',
      Digit2: '"',
      Digit3: '№',
      Digit4: ';',
      Digit5: '%',
      Digit6: ':',
      Digit7: '?',
      Digit8: '*',
      Digit9: '(',
      Equal: '+',
      Minus: '_',
      Period: 'Ю',
      Quote: 'Э',
      Semicolon: 'Ж',
      Slash: '.'
    }
  };
  
  

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
    const char = this.isShiftPressed ? this.charMapUpper[this.lang][event.code] : this.charMap[this.lang][event.code];
    if (char) {
      this.textArea.value += char;
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
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
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
    if (this.lang !== 'en') {
      this.generate(this.isShiftPressed ? this.ROWS_RU_UPP : this.ROWS_RU);
    } else {
      this.generate(this.isShiftPressed ? this.ROWS_EN_UPP : this.ROWS_EN);
    }
  }
  
  toggleLang() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
    this.container.innerHTML = '';
    console.log(this.lang)
    this.generateKeyboard(this.lang);
  }

  generateKeyboard() {
    const BODY = document.querySelector('body');
    BODY.appendChild(this.container);
    this.lang === 'en' ? this.generate(this.ROWS_EN) : this.generate(this.ROWS_RU);
  }

  createKey(key, i) {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.classList.add('key');
    keyElement.dataset.code = key + i;
    keyElement.addEventListener('click', () => {
      this.textArea.value += key;
    });
  
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