import "../../chunks/chunk.6M63UXML.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import Component from "../../components/rating/rating.js";
var rating_default = createComponent({
  tagName: "sl-rating",
  elementClass: Component,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlHover: "sl-hover"
  }
});
export {
  rating_default as default
};
