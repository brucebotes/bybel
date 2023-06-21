import "../../chunks/chunk.6M63UXML.js";
import { css } from "lit";
import componentStyles from "../../styles/component.styles";
import formControlStyles from "../../styles/form-control.styles";
var radio_group_styles_default = css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
export {
  radio_group_styles_default as default
};
