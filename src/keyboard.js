import { Key } from "./key.js";

export class Keyboard {
	constructor(lang, textArea) {
		this.textArea = textArea;
		this.isShiftPressed = false;
		this.isCapsPressed = false;
		this.keys = new Set();
    this.lang = localStorage.getItem('userLanguage') || 'en';
		this.isAltPressed = false;
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
		document.addEventListener("keyup", this.handleKeyUp.bind(this));
		this.container = document.createElement("div");
		this.container.classList.add("keyboard");
	}
  saveLanguageToLocalStorage(language) {
    localStorage.setItem('userLanguage', language);
  }
  charMap = {
		en: {
			KeyA: "a",
			KeyB: "b",
			KeyC: "c",
			KeyD: "d",
			KeyE: "e",
			KeyF: "f",
			KeyG: "g",
			KeyH: "h",
			KeyI: "i",
			KeyJ: "j",
			KeyK: "k",
			KeyL: "l",
			KeyM: "m",
			KeyN: "n",
			KeyO: "o",
			KeyP: "p",
			KeyQ: "q",
			KeyR: "r",
			KeyS: "s",
			KeyT: "t",
			KeyU: "u",
			KeyV: "v",
			KeyW: "w",
			KeyX: "x",
			KeyY: "y",
			KeyZ: "z",
			Backquote: "`",
			Backslash: "\\",
			BracketLeft: "[",
			BracketRight: "]",
			Comma: ",",
			Digit0: "0",
			Digit1: "1",
			Digit2: "2",
			Digit3: "3",
			Digit4: "4",
			Digit5: "5",
			Digit6: "6",
			Digit7: "7",
			Digit8: "8",
			Digit9: "9",
			Equal: "=",
			Minus: "-",
			Period: ".",
			Quote: "'",
			Semicolon: ";",
			Slash: "/",
		},
		ru: {
			KeyA: "ф",
			KeyB: "и",
			KeyC: "с",
			KeyD: "в",
			KeyE: "у",
			KeyF: "а",
			KeyG: "п",
			KeyH: "р",
			KeyI: "ш",
			KeyJ: "о",
			KeyK: "л",
			KeyL: "д",
			KeyM: "ь",
			KeyN: "т",
			KeyO: "щ",
			KeyP: "з",
			KeyQ: "й",
			KeyR: "к",
			KeyS: "ы",
			KeyT: "е",
			KeyU: "г",
			KeyV: "м",
			KeyW: "ц",
			KeyX: "ч",
			KeyY: "н",
			KeyZ: "я",
			Backquote: "ё",
			Backslash: "/",
			BracketLeft: "х",
			BracketRight: "ъ",
			Comma: "б",
			Digit0: "0",
			Digit1: "1",
			Digit2: "2",
			Digit3: "3",
			Digit4: "4",
			Digit5: "5",
			Digit6: "6",
			Digit7: "7",
			Digit8: "8",
			Digit9: "9",
			Equal: "=",
			Minus: "-",
			Period: "ю",
			Quote: "э",
			Semicolon: ";",
			Slash: ".",
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
			KeyA: "A",
			KeyB: "B",
			KeyC: "C",
			KeyD: "D",
			KeyE: "E",
			KeyF: "F",
			KeyG: "G",
			KeyH: "H",
			KeyI: "I",
			KeyJ: "J",
			KeyK: "K",
			KeyL: "L",
			KeyM: "M",
			KeyN: "N",
			KeyO: "O",
			KeyP: "P",
			KeyQ: "Q",
			KeyR: "R",
			KeyS: "S",
			KeyT: "T",
			KeyU: "U",
			KeyV: "V",
			KeyW: "W",
			KeyX: "X",
			KeyY: "Y",
			KeyZ: "Z",
			Backquote: "~",
			Backslash: "|",
			BracketLeft: "{",
			BracketRight: "}",
			Comma: "<",
			Digit0: ")",
			Digit1: "!",
			Digit2: "@",
			Digit3: "#",
			Digit4: "$",
			Digit5: "%",
			Digit6: "^",
			Digit7: "&",
			Digit8: "*",
			Digit9: "(",
			Equal: "+",
			Minus: "_",
			Period: ">",
			Quote: '"',
			Semicolon: ":",
			Slash: "?",
		},
		ru: {
			KeyA: "Ф",
			KeyB: "И",
			KeyC: "С",
			KeyD: "В",
			KeyE: "У",
			KeyF: "А",
			KeyG: "П",
			KeyH: "Р",
			KeyI: "Ш",
			KeyJ: "О",
			KeyK: "Л",
			KeyL: "Д",
			KeyM: "Ь",
			KeyN: "Т",
			KeyO: "Щ",
			KeyP: "З",
			KeyQ: "Й",
			KeyR: "К",
			KeyS: "Ы",
			KeyT: "Е",
			KeyU: "Г",
			KeyV: "М",
			KeyW: "Ц",
			KeyX: "Ч",
			KeyY: "Н",
			KeyZ: "Я",
			Backquote: "Ё",
			Backslash: "|",
			BracketLeft: "Х",
			BracketRight: "Ъ",
			Comma: "Б",
			Digit0: ")",
			Digit1: "!",
			Digit2: '"',
			Digit3: "№",
			Digit4: ";",
			Digit5: "%",
			Digit6: ":",
			Digit7: "?",
			Digit8: "*",
			Digit9: "(",
			Equal: "+",
			Minus: "_",
			Period: "Ю",
			Quote: "Э",
			Semicolon: "Ж",
			Slash: ".",
		},
	};

	toggleActive(event) {
		let key;
		event.location === 1
			? (key = document.querySelector(`[data-code='${event.key}']`))
			: (key = document.querySelector(`[data-code='${event.key + "Right"}']`)) || (key = document.querySelector(`[data-code='${event.key}']`)) || (key = document.querySelector(`[data-code='Space']`));
		// const key = document.querySelector(`[data-code='${event.code}']`) || document.querySelector(`[data-code='${event.key}']`);
		console.log(key);
		key.classList.contains("active")
			? key.classList.remove("active")
			: key.classList.add("active");
		// setTimeout(function () {
		// 	key.classList.remove("active");
		// }, 200);
	}

	handleKeyDown(event) {
		console.log(event);

		if (event.key === "Shift") {
			this.isShiftPressed = true;
			this.toggleCase();
			// let key;
			// event.location === 1
			// 	? (key = document.querySelector(`[data-code='${event.key}']`))
			// 	: (key = document.querySelector(
			// 			`[data-code='${event.key + "Right"}']`
			// 	  ));
			// key.classList.add("active");
      this.toggleActive(event);
		}
		if (event.key === "Alt") {
			this.isAltPressed = true;
			this.toggleActive(event);
		}
		if (event.key === "Backspace") {
      this.textArea.value = this.textArea.value.slice(0, -1);
			this.toggleActive(event);
		}
		if (event.key === "Enter") {
			this.textArea.value += "\n";
			this.toggleActive(event);
		}
		if (event.key === "Tab") {
			this.textArea.value += "\t";
			this.toggleActive(event);
		}
		if (event.key === " ") {
			this.textArea.value += " ";
			this.toggleActive(event);
		}
		if (event.key === "Control") {
			this.toggleActive(event);
		}

		if (event.key === "Meta") {
			this.toggleActive(event);
		}
		if (event.key === "CapsLock") {
			this.isCapsPressed = true;
			this.toggleCaps();
      document.querySelector('[data-code="CapsLock"]').classList.add("active");
		}
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
      let key = document.querySelector(`[data-code='${event.key}']`)
      // this.toggleActive(key);
      console.log(event.key);
      key.classList.contains("active")
			? key.classList.remove("active")
			: key.classList.add("active");
    }  
		if (this.isShiftPressed && this.isAltPressed) {
      setTimeout(()=> {
        this.toggleLang();
      }
     ,200);

		}
		const char =
			this.isShiftPressed || this.isCapsPressed
				? this.charMapUpper[this.lang][event.code]
				: this.charMap[this.lang][event.code];
		if (char) {
			this.textArea.value += char;
			const key = this.container.querySelector(`[data-code='${char}']`);
			if (key) {
				key.classList.add("active");
			}
		}
	}

	handleKeyUp(event) {
		if (event.key === "Shift") {
			this.isShiftPressed = false;
			this.toggleCase();
		}
		if (event.key === "Alt") {
			this.isAltPressed = false;
      this.toggleCase();

		}
		if (event.key === "CapsLock") {
			this.isCapsPressed = false;
			// document.querySelector('[data-code="CapsLock"]').classList.remove('active');
			this.toggleCaps();
		}
    if (event.key === "Backspace") {
			this.toggleActive(event);
      console.log('backoff')
		}
		if (event.key === "Enter") {
			this.toggleActive(event);
		}
		if (event.key === "Tab") {
			this.toggleActive(event);
		}
		if (event.key === " ") {
			this.toggleActive(event);
		}
		if (event.key === "Control") {
			this.toggleActive(event);
		}

		if (event.key === "Meta") {
			this.toggleActive(event);
		}
    
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
      let key = document.querySelector(`[data-code='${event.key}']`)
      // this.toggleActive(key);
      key.classList.contains("active")
			? key.classList.remove("active")
			: key.classList.add("active");
    } 

		const char = this.charMap[this.lang][event.code];
		if (!char) return;
		const key = this.container.querySelector(`[data-code="${char}"]`);
		if (key) {
			key.classList.remove("active");
		}
	}
	uppercaseSingleLetters(rows) {
		const uppercaseRows = [];

		for (let row of rows) {
			const uppercaseRow = [];

			for (let key of row) {
				if (key.length === 1) {
					uppercaseRow.push(key.toUpperCase());
				} else {
					uppercaseRow.push(key);
				}
			}

			uppercaseRows.push(uppercaseRow);
		}

		return uppercaseRows;
	}

	ROWS_EN = [
		[
			"`",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0",
			"-",
			"=",
			"Backspace",
		],
		["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
		[
			"CapsLock",
			"a",
			"s",
			"d",
			"f",
			"g",
			"h",
			"j",
			"k",
			"l",
			";",
			"'",
			"Enter",
		],
		["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"],
		[
			"Ctrl",
			"Option",
			"Command",
			" ",
			"Command",
			"Option",
			"←",
			"↓",
			"→",
			"Ctrl",
		],
	];
	ROWS_EN_UPP = [
		[
			"~",
			"!",
			"@",
			"#",
			"$",
			"%",
			"^",
			"&",
			"*",
			"(",
			")",
			"_",
			"+",
			"Backspace",
		],
		["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
		[
			"CapsLock",
			"A",
			"S",
			"D",
			"F",
			"G",
			"H",
			"J",
			"K",
			"L",
			":",
			'"',
			"Enter",
		],
		["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift"],
		[
			"Ctrl",
			"Option",
			"Command",
			" ",
			"Command",
			"Option",
			"←",
			"↓",
			"→",
			"Ctrl",
		],
	];
	ROWS_RU = [
		[
			"ё",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0",
			"-",
			"=",
			"Backspace",
		],
		["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/"],
		[
			"CapsLock",
			"ф",
			"ы",
			"в",
			"а",
			"п",
			"р",
			"о",
			"л",
			"д",
			"ж",
			"э",
			"Enter",
		],
		["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift"],
		[
			"Ctrl",
			"Option",
			"Command",
			" ",
			"Command",
			"Option",
			"←",
			"↓",
			"→",
			"Ctrl",
		],
	];
	ROWS_RU_UPP = [
		[
			"Ё",
			"!",
			'"',
			"№",
			";",
			"%",
			":",
			"?",
			"*",
			"(",
			")",
			"_",
			"+",
			"Backspace",
		],
		["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "|"],
		[
			"CapsLock",
			"Ф",
			"Ы",
			"В",
			"А",
			"П",
			"Р",
			"О",
			"Л",
			"Д",
			"Ж",
			"Э",
			"Enter",
		],
		["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift"],
		[
			"Ctrl",
			"Option",
			"Command",
			" ",
			"Command",
			"Option",
			"←",
			"↓",
			"→",
			"Ctrl",
		],
	];

	generate(ROWS) {
		this.keys.clear();

		for (let row of ROWS) {
			const divRow = document.createElement("div");
			divRow.classList.add("row");
			for (let key of row) {
				const keyElement = this.createKey(key);
				divRow.appendChild(keyElement);
				this.container.appendChild(divRow);
			}
		}
    this.isCapsPressed ? document.querySelector('[data-code="CapsLock"]').classList.add("active") : document.querySelector('[data-code="CapsLock"]').classList.remove("active");
	}

	toggleCaps() {
		this.container.innerHTML = "";
		if (this.lang !== "en") {
			this.generate(
				this.isCapsPressed
					? this.uppercaseSingleLetters(this.ROWS_RU)
					: this.ROWS_RU
			);
		} else {
			this.generate(
				this.isCapsPressed
					? this.uppercaseSingleLetters(this.ROWS_EN)
					: this.ROWS_EN
			);
		}
	}

	toggleCase() {
		this.container.innerHTML = "";
		if (this.lang !== "en") {
			// if (this.isCapsPressed) {
			// 	this.generate(this.uppercaseSingleLetters(this.ROWS_RU));
			// } else {
        if (this.isCapsPressed && this.isShiftPressed) {
          this.generate(this.uppercaseSingleLetters(this.ROWS_RU_UPP));
        
        }
        else if (this.isShiftPressed) {
          this.generate(this.ROWS_RU_UPP);
        }
        else if (this.isCapsPressed) {
          this.generate(this.uppercaseSingleLetters(this.ROWS_RU));
        }
        else {
          this.generate(this.ROWS_RU);
        }
				// this.generate(this.isShiftPressed && this.isCapsPressed ? this.ROWS_RU_UPP : this.ROWS_RU);
			}
		// } else {
		// 	if (this.isCapsPressed) {
		// 		this.generate(this.uppercaseSingleLetters(this.ROWS_EN));
		// 	} 
    else {
      if (this.isCapsPressed && this.isShiftPressed) {
        this.generate(this.uppercaseSingleLetters(this.ROWS_EN_UPP));
      
      }
      else if (this.isShiftPressed) {
        this.generate(this.ROWS_EN_UPP);
      }
      else if (this.isCapsPressed) {
        this.generate(this.uppercaseSingleLetters(this.ROWS_EN));
      }
      else {
        this.generate(this.ROWS_EN);
      }			}
		

	}

	toggleLang() {
		this.lang = this.lang === "en" ? "ru" : "en";
    this.saveLanguageToLocalStorage(this.lang)
		this.container.innerHTML = "";
    this.toggleCaps()
		// this.generateKeyboard(this.lang);

	}

	generateKeyboard() {
		const BODY = document.querySelector("body");
		BODY.appendChild(this.container);
		this.lang === "en"
			? this.generate(this.ROWS_EN)
			: this.generate(this.ROWS_RU);
	}

	createKey(key) {
		const keyElement = document.createElement("button");
		keyElement.textContent = key;
		keyElement.classList.add("key");
		keyElement.dataset.code = key;
		keyElement.addEventListener("click", () => {
			if (key.length === 1) {
				this.textArea.value += key;
			}
			keyElement.classList.add("active");
			setTimeout(function () {
				keyElement.classList.remove("active");
			}, 200);
		});
		if (this.keys.has(key)) {
			if (key == "Option") {
				keyElement.classList.add("alt");
				keyElement.dataset.code = "AltRight";
				return keyElement;
			}
			if (key == "Command") {
				keyElement.classList.add("meta");
				keyElement.dataset.code = "MetaRight";
				return keyElement;
			}
			if (key == "Ctrl") {
				keyElement.classList.add("ctrl");
				keyElement.dataset.code = "ControlRight";
				return keyElement;
			}
			keyElement.classList.add(`${key.toLowerCase()}`);
			keyElement.dataset.code = `${key}Right`;
			return keyElement;
		}
		switch (key) {
			case "Backspace":
				keyElement.classList.add("backspace");
				keyElement.dataset.code = "Backspace";
				break;
			case "Tab":
				keyElement.classList.add("tab");
				keyElement.dataset.code = "Tab";
				break;
			case "Option":
				keyElement.classList.add("alt");
				keyElement.dataset.code = "Alt";
				break;
			case "CapsLock":
				keyElement.classList.add("caps-lock");
				keyElement.dataset.code = "CapsLock";
				break;
			case "Enter":
				keyElement.classList.add("enter");
				keyElement.dataset.code = "Enter";
				break;
			case "Shift":
				keyElement.classList.add("shift");
				keyElement.dataset.code = "Shift";
				break;
			case "Ctrl":
				keyElement.classList.add("ctrl");
				keyElement.dataset.code = "Control";
				break;
			case " ":
				keyElement.classList.add("space");
				keyElement.dataset.code = "Space";
				break;
			case "Command":
				keyElement.classList.add("command");
				keyElement.dataset.code = "Meta";
				break;
			case "Control":
				keyElement.classList.add("ctrl");
				keyElement.dataset.code = "Control";
				break;
        case '↑':
        keyElement.classList.add("arrow");
        keyElement.dataset.code = "ArrowUp";
        break;
        case '←':
        keyElement.classList.add("arrow");
        keyElement.dataset.code = "ArrowLeft";
        break;

        case '↓':
        keyElement.classList.add("arrow");
        keyElement.dataset.code = "ArrowDown";
        break;

        case '→':
        keyElement.classList.add("arrow");
        keyElement.dataset.code = "ArrowRight";
        break;

		}

		this.keys.add(key);
		return keyElement;
	}
}
