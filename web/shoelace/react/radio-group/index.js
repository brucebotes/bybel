import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/radio-group/radio-group.js";
var radio_group_default = createComponent({
  tagName: "sl-radio-group",
  elementClass: Component,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  }
});
export {
  radio_group_default as default
};
