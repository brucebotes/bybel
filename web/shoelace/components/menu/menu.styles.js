import "../../chunks/chunk.6M63UXML.js";
import { css } from "lit";
import componentStyles from "../../styles/component.styles";
var menu_styles_default = css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;
export {
  menu_styles_default as default
};
