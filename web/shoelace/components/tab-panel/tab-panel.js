import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import { watch } from "../../internal/watch";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./tab-panel.styles";
let id = 0;
let SlTabPanel = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `sl-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
SlTabPanel.styles = styles;
__decorateClass([
  property({ reflect: true })
], SlTabPanel.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], SlTabPanel.prototype, "handleActiveChange", 1);
SlTabPanel = __decorateClass([
  customElement("sl-tab-panel")
], SlTabPanel);
export {
  SlTabPanel as default
};
