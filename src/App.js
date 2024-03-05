import Cart from './pages/Cart'
import Congratulation from './pages/Congratulation'
import Details from './pages/Details'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
