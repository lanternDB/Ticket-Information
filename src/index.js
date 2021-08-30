import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './Components/App'
import './styles.css'

import { Provider } from "./Utils"

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)