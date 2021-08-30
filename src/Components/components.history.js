import React from "react"
import { Context } from "../Utils"

import { StyledHistory } from "../Styled Components/styled.history"

export const History = (props) => {
  const [ state, dispatch] = React.useContext(Context)

  const handleClick = (data) => {
    dispatch({
      type: "Set History",
      payload: {
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

  return (
    <StyledHistory>
      <p>History:</p>
      {
        state.history.map((item, index) => (
          <div key={index} onClick={() => handleClick(item)}>{ item.time }</div>
        ))
      }
    </StyledHistory>
  )
}