import "../../chunks/chunk.6M63UXML.js";
import defaultLibrary from "./library.default";
import systemLibrary from "./library.system";
let registry = [defaultLibrary, systemLibrary];
let watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator,
    spriteSheet: options.spriteSheet
  });
  watchedIcons.forEach((icon) => {
    if (icon.library === name) {
      icon.setIcon();
    }
  });
}
function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}
export {
  getIconLibrary,
  registerIconLibrary,
  unregisterIconLibrary,
  unwatchIcon,
  watchIcon
};
