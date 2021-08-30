import styled from "styled-components"
import { base, scrollbar  } from "./index"

export const StyledInput = styled("input")
`
${base}

display: block;

width: 100%;

text-transform: ${ (props) => props.format};

::placeholder { 
  text-transform: initial; 
}
`

export const StyledTextArea = styled("textarea")
`
${base}
${scrollbar}

display: block;

width: 100%;
height: 150px;

resize: vertical;
`

export const StyledButton = styled("button")
`
${base}

display: flex;
align-items: center;
gap: .5em;

appearance: none;
user-select: none;
text-decoration: none;
cursor: pointer;

:hover, 
:focus-visible {
  background-color: hsl(0, 0%, 15%);
}

:active {
  background-color: var(--bc-primary);
}
`

export const StyledRadioButton = styled("div")
`
${base}

border: none;

.radioButton {
  display: flex;
  align-items: center;
  gap: .5em;
}

.radioInput {
  display: flex;
  input { height: 0; width: 0; opacity: 0; }
}

.radioControl {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 1em;
  height: 1em;

  border-radius: 50%;
  border: .1em solid currentColor;
}

.radioLabel {
  user-select: none;
}

input + .radioControl::before {
  content: "";

  width: 0.5em;
  height: 0.5em;

  box-shadow: inset 0.5em 0.5em white;
  border-radius: 50%;

  opacity: 0;
}

& input:checked + .radioControl::before {
  opacity: 1;
}
`