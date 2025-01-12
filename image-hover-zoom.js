class ImageHoverZoom extends HTMLElement {
  constructor() {
    super();
    this.imageWrapper = document.createElement("div");
    this.imageWrapper.append(document.createElement("slot"));
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.imageWrapper);
  }

  static register(tagName) {
    customElements.define(tagName || "image-hover-zoom", ImageHoverZoom);
  }

  #pointerX = 0;
  #pointerY = 0;

  connectedCallback() {
    // TODO possibly just inline div styles?
    let sheet = new CSSStyleSheet();
    /* css */
    sheet.replaceSync(
      `div { 
        display: inline-block; 
        overflow: hidden;
      }
      `
    );
    this.shadowRoot.adoptedStyleSheets.push(sheet);
    this.scale = 2;
    this.img = this.children[0];
    this.#pointerX = 0;
    this.#pointerY = 0;
    this.bindEvents();
  }

  bindEvents() {
    this.imageWrapper.addEventListener("pointerenter", (e) => {
      this.handlePointerenter(e);
    });

    this.imageWrapper.addEventListener("pointermove", (e) => {
      this.handlePointermove(e);
    });

    this.imageWrapper.addEventListener("pointerleave", (e) => {
      this.handlePointerleave(e);
    });
  }

  handlePointerenter(e) {
    this.zoom();
  }

  handlePointerleave(e) {
    this.unzoom();
  }

  handlePointermove(e) {
    const rect = this.imageWrapper.getBoundingClientRect();
    this.#pointerX = e.clientX - rect.left;
    this.#pointerY = e.clientY - rect.top;
    this.imageWrapper.scrollLeft = this.#pointerX;
    this.imageWrapper.scrollTop = this.#pointerY;
  }

  zoom() {
    this.img.style.transform = `scale(${this.scale})`;
    this.img.style.transformOrigin = "0 0";
  }

  unzoom() {
    this.img.style.removeProperty("transform");
    this.img.style.removeProperty("transformOrigin");
  }
}

ImageHoverZoom.register();
