import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { HasSlotController } from "../../internal/slot";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./breadcrumb-item.styles";
let SlBreadcrumbItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return html`
      <div
        part="base"
        class=${classMap({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${isLink ? html`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${ifDefined(this.target ? this.target : void 0)}"
                rel=${ifDefined(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : html`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
  }
};
SlBreadcrumbItem.styles = styles;
__decorateClass([
  property()
], SlBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  property()
], SlBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  property()
], SlBreadcrumbItem.prototype, "rel", 2);
SlBreadcrumbItem = __decorateClass([
  customElement("sl-breadcrumb-item")
], SlBreadcrumbItem);
export {
  SlBreadcrumbItem as default
};
