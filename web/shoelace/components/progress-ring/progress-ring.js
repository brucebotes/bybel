import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property, query, state } from "lit/decorators.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./progress-ring.styles";
let SlProgressRing = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return html`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
SlProgressRing.styles = styles;
__decorateClass([
  query(".progress-ring__indicator")
], SlProgressRing.prototype, "indicator", 2);
__decorateClass([
  state()
], SlProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], SlProgressRing.prototype, "value", 2);
__decorateClass([
  property()
], SlProgressRing.prototype, "label", 2);
SlProgressRing = __decorateClass([
  customElement("sl-progress-ring")
], SlProgressRing);
export {
  SlProgressRing as default
};
