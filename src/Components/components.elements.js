import React from "react"
import useCopyClipboard from "react-use-clipboard"
import { Context } from "../Utils"

import * as Icon from "../icons"
import { 
  StyledButton,
  StyledInput,
  StyledRadioButton,
  StyledTextArea,
} from "../Styled Components/styled.elements"

/** ------ Buttons ------ **/
export const CopyButton = (props) => {
  const [ isCopied, setCopied ] = useCopyClipboard( props.onClick(), { successDuration: 2000 })

  return <StyledButton tabIndex="1" onClick={ () => setCopied() }>{ isCopied ? Icon.copyIconSuccess : Icon.copyIconDefault }{ props.children }</StyledButton>
}

export function ClearButton(props) {
  const [ state, dispatch ] = React.useContext(Context)

  const handleClick = (data) => {
    dispatch({
      type: "New",
      payload: {
        time: new Date().toLocaleTimeString(),
        availability: data.availability,
        computerLocation: data.computerLocation,
        computerName: data.computerName,
        email: data.email,
        location: data.location,
        notes: data.notes,
        phoneNumber: data.phoneNumber,
        position: data.position,
        status: data.status,
        summary: data.summary,
        timezone: data.timezone
      }
    })
  }

  return <StyledButton tabIndex="1" onClick={ () => handleClick(state)}>{ Icon.plusIcon }{ props.children }</StyledButton>
}

export const HistoryButton = (props) => {
  const [, dispatch ] = React.useContext(Context)
  
  const handleClick = () => {
    dispatch({
      type: "Show History"
    })
  }
  
  return <StyledButton tabIndex="1" onClick={ () => handleClick()}>{ Icon.historyIcon }{ props.children }</StyledButton>
}

/** ------ Inputs ------ **/
export const Input = (props) => {
  const [, dispatch ] = React.useContext(Context)

  const handleClick = (e) => {
    dispatch({
      type: "Change",
      payload: {
        name: e.target.name,
        data: e.target.value
      }
    })
  }

  return <StyledInput tabIndex="1" type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} format={props.format} onChange={(e) => handleClick(e)} />
}

/** ------ Text Inputs ------ **/
export const TextArea = (props) => {
  const [, dispatch ] = React.useContext(Context)

  const handleClick = (e) => {
    dispatch({
      type: "Change",
      payload: {
        name: e.target.name,
        data: e.target.value
      }
    })
  }

  return <StyledTextArea tabIndex="1" rows="18" {...props} onChange={(e) => handleClick(e)} />
}

/** ------ Radio Buttons ------ **/
export const RadioButton = ({ children, ...props }) => {
  const [, dispatch ] = React.useContext(Context)
  
  const handleClick = (e) => {
    dispatch({
      type: "Change",
      payload: {
        name: e.target.name,
        data: e.target.value
      }
    })
  }

  return (
    <StyledRadioButton>
      <label className="radioButton">
        <span className="radioInput">
          <input type="radio" {...props} onChange={(e) => handleClick(e)} />
          <span className="radioControl"></span>
        </span>
        <span className="radioLabel">{ children }</span>
      </label>
    </StyledRadioButton>
  )
}