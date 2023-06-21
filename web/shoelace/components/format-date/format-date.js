import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
let SlFormatDate = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return html`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  property()
], SlFormatDate.prototype, "date", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "weekday", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "era", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "year", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "month", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "day", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "hour", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "minute", 2);
__decorateClass([
  property()
], SlFormatDate.prototype, "second", 2);
__decorateClass([
  property({ attribute: "time-zone-name" })
], SlFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  property({ attribute: "time-zone" })
], SlFormatDate.prototype, "timeZone", 2);
__decorateClass([
  property({ attribute: "hour-format" })
], SlFormatDate.prototype, "hourFormat", 2);
SlFormatDate = __decorateClass([
  customElement("sl-format-date")
], SlFormatDate);
export {
  SlFormatDate as default
};
