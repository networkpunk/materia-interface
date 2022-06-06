import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./components/NavBar"
import Dash from "./pages/Dash"
import Inventory from "./pages/Inventory"
import Exchange from "./pages/Exchange"

const AppWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
`

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <Switch>
        <Route exact strict path="/" component={Dash} />
        <Route exact strict path="/inventory" component={Inventory} />
        <Route exact strict path="/exchange" component={Exchange} />
      </Switch>
    </AppWrapper>
  )
}

export default App
