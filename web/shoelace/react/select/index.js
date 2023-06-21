import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/select/select.js";
var select_default = createComponent({
  tagName: "sl-select",
  elementClass: Component,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlBlur: "sl-blur",
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInvalid: "sl-invalid"
  }
});
export {
  select_default as default
};
