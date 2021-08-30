import styled from "styled-components"
import { scrollbar } from "./index"

export const StyledApp = styled("div")
`
display: flex;

height: 100vh;
width: 100%;

overflow: auto;

.left-content {
  ${scrollbar}

  padding: var(--padding);
  margin: var(--margin);
  margin-right: .5em;
  
  width: 30%;
  max-width: 140px;

  overflow: auto;
}

.right-content {
  width: 100%;
  min-width: 650px;
  
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;

  /* Chrome */
  ::-webkit-scrollbar {
    display: none;
  }
  
  .top {
    display: flex;
    gap: 3em;
    
    .left, & .right {
      width: 100%;
      
      .child {
        display: flex;
        align-items: center;
        gap: .5rem;       
        
        .right {
          width: 100px;
        }
      }
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .left, .right {
      display: flex;
      gap: .5rem;
    }
  }
}
`