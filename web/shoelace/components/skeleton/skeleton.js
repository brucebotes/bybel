import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./skeleton.styles";
let SlSkeleton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = styles;
__decorateClass([
  property()
], SlSkeleton.prototype, "effect", 2);
SlSkeleton = __decorateClass([
  customElement("sl-skeleton")
], SlSkeleton);
export {
  SlSkeleton as default
};
