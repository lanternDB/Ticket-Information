import React from "react"

export function copySummary(data) { return (`${data.summary ? `${data.summary}` : ""}${data.position ? ` / ${data.position.toUpperCase()}` : ` / NON-TSO` }${data.location ? ` / ${data.location.toUpperCase()}` : `` }${data.status ? ` / ${data.status}` : ` / On-Site` } / 1`)}
export function copyNotes(data){ return (`Username: ${data.email.substring(0, data.email.indexOf('@')).toLowerCase()}\nEmail: ${data.email}\nBest Contact Number: ${data.phoneNumber}\nLocation: ${data.location.toUpperCase()}\nOn-Site/Remote: ${data.status}${ data.availability ?  (`\n\nAvailability: ${data.availability}`) : "" }${data.timezone ? (`\nTimezone: ${data.timezone}`) : ""}${data.computerName ? (`\n\nComputer Name: ${data.computerName.toUpperCase()}`) : "" }${data.computerLocation ? (`\nComputer Location: ${data.computerLocation}`) : "" } ${data.notes ? (`\n\nDescription of Issue/Request:\n${data.notes}`) : ""}`)}
export function copyInfoOnly(data) { return (`Username: ${data.email.substring(0, data.email.indexOf('@')).toLowerCase()}\nEmail: ${data.email}\nBest Contact Number: ${data.phoneNumber}\nLocation: ${data.location.toUpperCase()}\nOn-Site/Remote: ${data.status}${ data.availability ?  (`\n\nAvailability: ${data.availability}`) : "" }${data.timezone ? (`\nTimezone: ${data.timezone}`) : ""}${data.computerName ? (`\n\nComputer Name: ${data.computerName.toUpperCase()}`) : "" }${data.computerLocation ? (`\nComputer Location: ${data.computerLocation}`) : "" }`)}
export function copyNotesOnly(data) { return (data.notes)}
export function copyUsername(data) { return (data.email.substring(0, data.email.indexOf('@')).toLowerCase())}
export function copyComputerName(data) { return (data.computerName.toUpperCase())}
export function copyAvailability(data) { return (`${`Availability: ${data.availability}`}\n${`Timezone: ${data.timezone}`}`)}

const initialState = {
  availability: "",
  computerLocation: "",
  computerName: "",
  email: "",
  location: "",
  notes: "",
  phoneNumber: "",
  position: "",
  status: "On-Site",
  summary: "",
  timezone: "",

  history: [],
  showHistory: false,
  isViewingHistory: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "Change":
      return { ...state, [action.payload.name]: action.payload.data }

    case "New":
      if (!state.isViewingHistory) return {
        ...state,
        availability: "",
        computerLocation: "",
        computerName: "",
        email: "",
        location: "",
        notes: "",
        phoneNumber: "",
        position: "",
        status: "On-Site",
        summary: "",
        timezone: "",
        history: [...state.history, {
          time: action.payload.time,
          availability: action.payload.availability,
          computerLocation: action.payload.computerLocation,
          computerName: action.payload.computerName,
          email: action.payload.email,
          location: action.payload.location,
          notes: action.payload.notes,
          phoneNumber: action.payload.phoneNumber,
          position: action.payload.position,
          status: action.payload.status,
          summary: action.payload.summary,
          timezone: action.payload.timezone
        }]
      }
      return { 
      ...state,         
      availability: "",
      computerLocation: "",
      computerName: "",
      email: "",
      location: "",
      notes: "",
      phoneNumber: "",
      position: "",
      status: "On-Site",
      summary: "",
      timezone: "",
      isViewingHistory: false
    }
    case "Show History":
      return {...state, showHistory: !state.showHistory}
    case "Set History":
      return {
        ...state,
        availability: action.payload.availability,
        computerLocation: action.payload.computerLocation,
        computerName: action.payload.computerName,
        email: action.payload.email,
        location: action.payload.location,
        notes: action.payload.notes,
        phoneNumber: action.payload.phoneNumber,
        position: action.payload.position,
        status: action.payload.status,
        summary: action.payload.summary,
        timezone: action.payload.timezone,
        isViewingHistory: true,
      }
    default:
      return state
  }
}

export const Context = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Context.Provider value={[ state, dispatch ]}>
    	{ children }
    </Context.Provider>
  )
}