import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/dialog/dialog.js";
var dialog_default = createComponent({
  tagName: "sl-dialog",
  elementClass: Component,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  }
});
export {
  dialog_default as default
};
