export class Key {
  constructor(labelEn, labelRu) {
    this.labelEn = labelEn;
    this.labelRu = labelRu;
  }

  render(lang) {
    lang = 'ru' ? label = this.labelRu : label = this.labelEn;
    const keyElement = document.createElement('button');
    keyElement.textContent = this.label;
    keyElement.classList.add('key');
    return keyElement;
  }
}
