import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/animation/animation.js";
var animation_default = createComponent({
  tagName: "sl-animation",
  elementClass: Component,
  react: React,
  events: {
    onSlCancel: "sl-cancel",
    onSlFinish: "sl-finish",
    onSlStart: "sl-start"
  }
});
export {
  animation_default as default
};
