import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property } from "lit/decorators.js";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
let SlFormatBytes = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  property({ type: Number })
], SlFormatBytes.prototype, "value", 2);
__decorateClass([
  property()
], SlFormatBytes.prototype, "unit", 2);
__decorateClass([
  property()
], SlFormatBytes.prototype, "display", 2);
SlFormatBytes = __decorateClass([
  customElement("sl-format-bytes")
], SlFormatBytes);
export {
  SlFormatBytes as default
};
