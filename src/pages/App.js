import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from '../components/TopBar'
import Dash from './Dash'
import Inventory from './Inventory'
import Exchange from './Exchange'


const AppWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
`

function App() {
  return (
    <AppWrapper>
      <Topbar />
      <Switch>
        <Route exact strict path="/" component={Dash} />
        <Route exact strict path="/inventory" component={Inventory} />
        <Route exact strict path="/exchange" component={Exchange} />
      </Switch>
      </AppWrapper>
  );
}

export default App