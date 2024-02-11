import Details from './pages/Details'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories/:idc" component={Details} />
      </Router>
    </div>
  )
}

export default App
