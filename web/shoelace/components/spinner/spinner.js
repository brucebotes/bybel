import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./spinner.styles";
let SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return html`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = styles;
SlSpinner = __decorateClass([
  customElement("sl-spinner")
], SlSpinner);
export {
  SlSpinner as default
};
