import "../../chunks/chunk.6M63UXML.js";
import { css } from "lit";
import componentStyles from "../../styles/component.styles";
var visually_hidden_styles_default = css`
  ${componentStyles}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;
export {
  visually_hidden_styles_default as default
};
