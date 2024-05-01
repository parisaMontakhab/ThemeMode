import { createContext, useState } from "react";
import Form from "./assets/components/Form";
import "./App.css";



 export default function App() {
 
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Form />
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
    </ThemeContext.Provider>
  );
}


