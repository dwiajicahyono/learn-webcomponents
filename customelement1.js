class ImageFigure extends HTMLElement {
    connectedCallback() {
      this.src = this.getAttribute("src") || null;
      this.alt = this.getAttribute("alt") || null;
      this.caption = this.getAttribute("caption") || null;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <figure>
          <img src="${this.src}"
              alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
  
    static get observedAttributes() {
      return ["caption"];
    }
  }
  
  customElements.define("image-figure", ImageFigure);
/*
attributeChangedCallback menetapkan logika perubahan 
pada fungsi ini juga teradapat 3 argumrnt fungsi yang bisa dimanfaatkan yaitu :
- name : nama dari atribut yang berubah
- old Value : Nilai pada atribut sebelum berubah
- new Value : Nilai baru yang ditetapkan pada atribut
*/