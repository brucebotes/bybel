import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { LocalizeController } from "../../utilities/localize";
import { styleMap } from "lit/directives/style-map.js";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./progress-bar.styles";
let SlProgressBar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${ifDefined(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${styleMap({ width: `${this.value}%` })}>
          ${!this.indeterminate ? html` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = styles;
__decorateClass([
  property({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  property()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = __decorateClass([
  customElement("sl-progress-bar")
], SlProgressBar);
export {
  SlProgressBar as default
};
