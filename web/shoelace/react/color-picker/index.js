import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/color-picker/color-picker.js";
var color_picker_default = createComponent({
  tagName: "sl-color-picker",
  elementClass: Component,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  }
});
export {
  color_picker_default as default
};
