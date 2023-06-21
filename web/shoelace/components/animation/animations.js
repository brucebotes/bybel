import "../../chunks/chunk.6M63UXML.js";
import * as animations from "@shoelace-style/animations";
function getAnimationNames() {
  return Object.entries(animations).filter(([name]) => name !== "easings").map(([name]) => name);
}
function getEasingNames() {
  return Object.entries(animations.easings).map(([name]) => name);
}
export {
  animations,
  getAnimationNames,
  getEasingNames
};
