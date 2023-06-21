import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import "../icon/icon";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property, query } from "lit/decorators.js";
import { getTextContent } from "../../internal/slot";
import { html } from "lit";
import { watch } from "../../internal/watch";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./menu-item.styles";
let SlMenuItem = class extends ShoelaceElement {
  constructor() {
    super();
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.disabled = false;
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.addEventListener("click", this.handleHostClick);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  render() {
    return html`
      <div
        part="base"
        class=${classMap({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--has-submenu": false
      // reserved for future use
    })}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `;
  }
};
SlMenuItem.styles = styles;
__decorateClass([
  query("slot:not([name])")
], SlMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  query(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  property()
], SlMenuItem.prototype, "type", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  property()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], SlMenuItem.prototype, "handleTypeChange", 1);
SlMenuItem = __decorateClass([
  customElement("sl-menu-item")
], SlMenuItem);
export {
  SlMenuItem as default
};
