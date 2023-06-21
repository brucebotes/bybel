import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/button/button.js";
var button_default = createComponent({
  tagName: "sl-button",
  elementClass: Component,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  }
});
export {
  button_default as default
};
