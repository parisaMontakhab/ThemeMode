import { useState } from 'react'

import './App.css'

function App() {
  

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
