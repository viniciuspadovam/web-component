class TituloDinamico extends HTMLElement {
   constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      // base di component
      const componentRoot = document.createElement("h1");
      componentRoot.textContent = this.getAttribute('title');

      // estilizar o component
      const style = document.createElement("style");
      style.textContent = `
         h1 {
            color: red;
         }
      `;

      // enviar para a shadow DOM
      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
   }
}

customElements.define("titulo-dinamico", TituloDinamico);
