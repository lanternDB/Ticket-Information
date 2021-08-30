import { css } from "styled-components"

export const base = () => css
`
margin: var(--margin);
padding: var(--padding);

color: var(--fc-primary);
background-color: var(--bc-primary);

font-size: var(--fs-primary);
font-family: var(--ff-primary);

border: 1px solid var(--bc-secondary);
outline: none;
`

export const scrollbar = () => css
`
/* Firefox */
scrollbar-width: thin;
scrollbar-color: var(--bc-secondary) transparent;

/* Chrome */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--bc-secondary);

  border: 3px solid var(--bc-primary);
  border-radius: 10px;
}
::-webkit-scrollbar-button,
::-webkit-scrollbar-corner {
  display: none;
}
`