import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./badge.styles";
let SlBadge = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      ></slot>
    `;
  }
};
SlBadge.styles = styles;
__decorateClass([
  property({ reflect: true })
], SlBadge.prototype, "variant", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlBadge.prototype, "pill", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlBadge.prototype, "pulse", 2);
SlBadge = __decorateClass([
  customElement("sl-badge")
], SlBadge);
export {
  SlBadge as default
};
