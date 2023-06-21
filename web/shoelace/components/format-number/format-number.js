import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property } from "lit/decorators.js";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
let SlFormatNumber = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  property({ type: Number })
], SlFormatNumber.prototype, "value", 2);
__decorateClass([
  property()
], SlFormatNumber.prototype, "type", 2);
__decorateClass([
  property({ attribute: "no-grouping", type: Boolean })
], SlFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  property()
], SlFormatNumber.prototype, "currency", 2);
__decorateClass([
  property({ attribute: "currency-display" })
], SlFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  property({ attribute: "minimum-integer-digits", type: Number })
], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  property({ attribute: "minimum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  property({ attribute: "maximum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  property({ attribute: "minimum-significant-digits", type: Number })
], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  property({ attribute: "maximum-significant-digits", type: Number })
], SlFormatNumber.prototype, "maximumSignificantDigits", 2);
SlFormatNumber = __decorateClass([
  customElement("sl-format-number")
], SlFormatNumber);
export {
  SlFormatNumber as default
};
