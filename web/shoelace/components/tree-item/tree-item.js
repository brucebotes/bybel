import {
  __decorateClass
} from "../../chunks/chunk.6M63UXML.js";
import "../checkbox/checkbox";
import "../icon/icon";
import "../spinner/spinner";
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from "../../internal/animate";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property, query, state } from "lit/decorators.js";
import { getAnimation, setDefaultAnimation } from "../../utilities/animation-registry";
import { html } from "lit";
import { live } from "lit/directives/live.js";
import { LocalizeController } from "../../utilities/localize";
import { watch } from "../../internal/watch";
import { when } from "lit/directives/when.js";
import ShoelaceElement from "../../internal/shoelace-element";
import styles from "./tree-item.styles";
let SlTreeItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.indeterminate = false;
    this.isLeaf = false;
    this.loading = false;
    this.selectable = false;
    this.expanded = false;
    this.selected = false;
    this.disabled = false;
    this.lazy = false;
  }
  static isTreeItem(node) {
    return node instanceof Element && node.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "-1");
    if (this.isNestedItem()) {
      this.slot = "children";
    }
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? "auto" : "0";
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("sl-collapse");
    await stopAnimations(this.childrenContainer);
    const { keyframes, options } = getAnimation(this, "tree-item.collapse", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.hidden = true;
    this.emit("sl-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const parent = this.parentElement;
    return !!parent && SlTreeItem.isTreeItem(parent);
  }
  handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
      this.indeterminate = false;
    }
  }
  async animateExpand() {
    this.emit("sl-expand");
    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;
    const { keyframes, options } = getAnimation(this, "tree-item.expand", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = "auto";
    this.emit("sl-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false");
    if (!this.loading) {
      this.animateExpand();
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
    } else {
      this.removeAttribute("aria-expanded");
    }
  }
  handleExpandAnimation() {
    if (this.expanded) {
      if (this.lazy) {
        this.loading = true;
        this.emit("sl-lazy-load");
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }
  handleLazyChange() {
    this.emit("sl-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled = true } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
      (item) => SlTreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
    ) : [];
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
    return html`
      <div
        part="base"
        class="${classMap({
      "tree-item": true,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": showExpandButton,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${classMap({
      "tree-item__expand-button": true,
      "tree-item__expand-button--visible": showExpandButton
    })}
            aria-hidden="true"
          >
            ${when(this.loading, () => html` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${when(
      this.selectable,
      () => html`
                <sl-checkbox
                  part="checkbox"
                  exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${live(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `;
  }
};
SlTreeItem.styles = styles;
__decorateClass([
  state()
], SlTreeItem.prototype, "indeterminate", 2);
__decorateClass([
  state()
], SlTreeItem.prototype, "isLeaf", 2);
__decorateClass([
  state()
], SlTreeItem.prototype, "loading", 2);
__decorateClass([
  state()
], SlTreeItem.prototype, "selectable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTreeItem.prototype, "expanded", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTreeItem.prototype, "selected", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTreeItem.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTreeItem.prototype, "lazy", 2);
__decorateClass([
  query("slot:not([name])")
], SlTreeItem.prototype, "defaultSlot", 2);
__decorateClass([
  query("slot[name=children]")
], SlTreeItem.prototype, "childrenSlot", 2);
__decorateClass([
  query(".tree-item__item")
], SlTreeItem.prototype, "itemElement", 2);
__decorateClass([
  query(".tree-item__children")
], SlTreeItem.prototype, "childrenContainer", 2);
__decorateClass([
  query(".tree-item__expand-button slot")
], SlTreeItem.prototype, "expandButtonSlot", 2);
__decorateClass([
  watch("loading", { waitUntilFirstUpdate: true })
], SlTreeItem.prototype, "handleLoadingChange", 1);
__decorateClass([
  watch("disabled")
], SlTreeItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], SlTreeItem.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], SlTreeItem.prototype, "handleExpandedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], SlTreeItem.prototype, "handleExpandAnimation", 1);
__decorateClass([
  watch("lazy", { waitUntilFirstUpdate: true })
], SlTreeItem.prototype, "handleLazyChange", 1);
SlTreeItem = __decorateClass([
  customElement("sl-tree-item")
], SlTreeItem);
setDefaultAnimation("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
setDefaultAnimation("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
export {
  SlTreeItem as default
};
