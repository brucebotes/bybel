import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import "../icon/icon";
import { customElement, property, query } from "lit/decorators.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./breadcrumb.styles";
let SlBreadcrumb = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "sl-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return html`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></sl-icon>
      </slot>
    `;
  }
};
SlBreadcrumb.styles = styles;
__decorateClass([
  query("slot")
], SlBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  query('slot[name="separator"]')
], SlBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  property()
], SlBreadcrumb.prototype, "label", 2);
SlBreadcrumb = __decorateClass([
  customElement("sl-breadcrumb")
], SlBreadcrumb);
export {
  SlBreadcrumb as default
};
