import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/tooltip/tooltip.js";
var tooltip_default = createComponent({
  tagName: "sl-tooltip",
  elementClass: Component,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  }
});
export {
  tooltip_default as default
};
