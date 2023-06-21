import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property } from "lit/decorators.js";
import { watch } from "../../internal/watch";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./divider.styles";
let SlDivider = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
SlDivider.styles = styles;
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], SlDivider.prototype, "handleVerticalChange", 1);
SlDivider = __decorateClass([
  customElement("sl-divider")
], SlDivider);
export {
  SlDivider as default
};
