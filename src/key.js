export class Key {
  constructor(label, code, width, height) {
    this.label = label;
    this.code = code;
    this.width = width;
    this.height = height;
  }

  render(container) {
    const keyElement = document.createElement('button');
    keyElement.textContent = this.label;
    keyElement.classList.add('key');
    keyElement.style.width = `${this.width}px`;
    keyElement.style.height = `${this.height}px`;
    keyElement.dataset.code = this.code;
    container.appendChild(keyElement);
  }

}