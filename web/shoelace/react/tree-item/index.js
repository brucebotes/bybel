import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/tree-item/tree-item.js";
var tree_item_default = createComponent({
  tagName: "sl-tree-item",
  elementClass: Component,
  react: React,
  events: {
    onSlExpand: "sl-expand",
    onSlAfterExpand: "sl-after-expand",
    onSlCollapse: "sl-collapse",
    onSlAfterCollapse: "sl-after-collapse",
    onSlLazyChange: "sl-lazy-change",
    onSlLazyLoad: "sl-lazy-load"
  }
});
export {
  tree_item_default as default
};
