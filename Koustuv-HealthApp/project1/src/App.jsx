import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <HeadlineCards theme={theme}/>
    </div>
  )
}

export default App
