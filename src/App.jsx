import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/HomePage"

function App() {
  return (
    <div className="layout">
      <Navbar/>
      <div className="homesection">
        <HomePage/>
      </div>
    </div>

  )
}

export default App