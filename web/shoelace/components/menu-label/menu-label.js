import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./menu-label.styles";
let SlMenuLabel = class extends ShoelaceElement {
  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = styles;
SlMenuLabel = __decorateClass([
  customElement("sl-menu-label")
], SlMenuLabel);
export {
  SlMenuLabel as default
};
