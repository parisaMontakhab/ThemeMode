import { useState } from "react";
import Form from "./assets/components/Form"
import './App.css'

function App() {
  
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Form  />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </div>
  )
}

export default App
