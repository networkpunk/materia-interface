import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import { GlobalStyle } from "./theme"
import App from "./App"

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
)
