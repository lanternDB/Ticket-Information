import React from "react"
import { 
  Context,
  copySummary,
  copyNotes,
  copyInfoOnly,
  copyNotesOnly,
  copyUsername,
  copyComputerName,
  copyAvailability,
} from "../Utils"

import { History } from "./components.history"
import { CopyButton, ClearButton, HistoryButton, Input, TextArea, RadioButton } from "./components.elements"

import { StyledApp } from "../Styled Components/styled.app"

export const App = () => {
  const [ state ] = React.useContext(Context)

  return (
    <StyledApp>
      { state.showHistory ? (
          <div className="left-content"><History history={state.history} /></div>
        ) : null
      }
      <div className="right-content">
        <div className="top">

          <div className="left">
            <div className="child"><Input type="text" id="email" name="email" placeholder="Email" format="lowercase" value={state.email} /><CopyButton onClick={ () => copyUsername(state) }></CopyButton></div>
            <div className="child">
              <div className="left">
                <Input type="text" name="location" placeholder="Location" format="uppercase" value={state.location} />
                <Input type="text" name="position" placeholder="Position" format="uppercase" value={state.position} />
              </div>
              <div className="right">
                <RadioButton id="On-site" name="status" value="On-Site" checked={ state.status === "On-Site" } >On Site</RadioButton>
                <RadioButton id="Remote" name="status" value="Remote" checked={ state.status === "Remote" } >Remote</RadioButton> 
              </div>
            </div>
            <div className="child"><Input type="text" name="phoneNumber" placeholder="Phone Number" value={state.phoneNumber} /></div>
          </div>

          <div className="right">
            <div className="child"><Input type="text" name="availability" placeholder="Availability" value={state.availability} /><CopyButton onClick={ () => copyAvailability(state) }></CopyButton></div>
            <div className="child"><Input type="text" name="timezone" placeholder="Time Zone" value={state.timezone} /></div>
            <div className="child"><Input type="text" name="computerName" placeholder="Computer Name" format="uppercase" value={state.computerName} /><CopyButton onClick={ () => copyComputerName(state) }></CopyButton></div>
            <div className="child"><Input type="text" name="computerLocation" placeholder="Computer Location" value={state.computerLocation} /></div>
            
          </div>
        </div>
        
        <div className="middle">
            <Input type="text" name="summary" placeholder="Summary" value={state.summary} />
            <TextArea name="notes" placeholder="Description of Issue/Request:" value={state.notes} />
        </div>
        
        <div className="bottom">
          <div className="left">
            <CopyButton onClick={ () => copySummary(state)}>Summary</CopyButton>
            <CopyButton onClick={ () => copyNotes(state)}>Info & Notes</CopyButton>
            <CopyButton onClick={ () => copyInfoOnly(state)}>Info</CopyButton>
            <CopyButton onClick={ () => copyNotesOnly(state)}>Notes</CopyButton>
            
          </div>
          <div className="right">
            <ClearButton>New</ClearButton> 
            <HistoryButton>History</HistoryButton>
          </div>
        </div>
      </div>
    </StyledApp>
  )
}