
import Form from "./assets/components/Form";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";



 export default function App() {
 
  return (
   <ThemeProvider>
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

   </ThemeProvider>
     
    
  );
}


