class ComponentName extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "image-hover-zoom", ComponentName);
    }
  }

  connectedCallback() {
    // Start here...
  }
}

ComponentName.register();
