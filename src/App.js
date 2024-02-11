import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  )
}

export default App
