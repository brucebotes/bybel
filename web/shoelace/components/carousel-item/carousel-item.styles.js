import "../../chunks/chunk.6M63UXML.js";
import { css } from "lit";
import componentStyles from "../../styles/component.styles";
var carousel_item_styles_default = css`
  ${componentStyles}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export {
  carousel_item_styles_default as default
};
