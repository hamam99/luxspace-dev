import Details from './pages/Details'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App w-screen h-screen">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={Details} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
