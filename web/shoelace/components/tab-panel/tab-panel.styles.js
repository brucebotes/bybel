import "../../chunks/chunk.6M63UXML.js";
import { css } from "lit";
import componentStyles from "../../styles/component.styles";
var tab_panel_styles_default = css`
  ${componentStyles}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;
export {
  tab_panel_styles_default as default
};
