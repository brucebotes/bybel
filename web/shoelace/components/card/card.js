import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement } from "lit/decorators.js";
import { HasSlotController } from "../../internal/slot";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./card.styles";
let SlCard = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
SlCard.styles = styles;
SlCard = __decorateClass([
  customElement("sl-card")
], SlCard);
export {
  SlCard as default
};
