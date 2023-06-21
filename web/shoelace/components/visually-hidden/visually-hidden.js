import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./visually-hidden.styles";
let SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return html` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = styles;
SlVisuallyHidden = __decorateClass([
  customElement("sl-visually-hidden")
], SlVisuallyHidden);
export {
  SlVisuallyHidden as default
};
