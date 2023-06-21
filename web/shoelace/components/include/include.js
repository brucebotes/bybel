import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import { requestInclude } from "./request";
import { watch } from "../../internal/watch";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./include.styles";
let SlInclude = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("sl-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("sl-load");
    } catch (e) {
      this.emit("sl-error", { detail: { status: -1 } });
    }
  }
  render() {
    return html`<slot></slot>`;
  }
};
SlInclude.styles = styles;
__decorateClass([
  property()
], SlInclude.prototype, "src", 2);
__decorateClass([
  property()
], SlInclude.prototype, "mode", 2);
__decorateClass([
  property({ attribute: "allow-scripts", type: Boolean })
], SlInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], SlInclude.prototype, "handleSrcChange", 1);
SlInclude = __decorateClass([
  customElement("sl-include")
], SlInclude);
export {
  SlInclude as default
};
