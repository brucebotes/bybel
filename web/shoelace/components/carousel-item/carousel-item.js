import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./carousel-item.styles";
let SlCarouselItem = class extends ShoelaceElement {
  static isCarouselItem(node) {
    return node instanceof Element && node.getAttribute("aria-roledescription") === "slide";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return html` <slot></slot> `;
  }
};
SlCarouselItem.styles = styles;
SlCarouselItem = __decorateClass([
  customElement("sl-carousel-item")
], SlCarouselItem);
export {
  SlCarouselItem as default
};
