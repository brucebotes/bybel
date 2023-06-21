import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/alert/alert.js";
var alert_default = createComponent({
  tagName: "sl-alert",
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
  alert_default as default
};
