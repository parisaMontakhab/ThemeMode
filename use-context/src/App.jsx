
import Form from "./assets/components/Form";
import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";



 export default function App() {
 
  return (
   <ThemeProvider>
     <div>
        <Form />
        <ToggleTheme/>
       
      </div>

   </ThemeProvider>
     
    
  );
}

function ToggleTheme (){
  const {theme,setTheme} = useTheme()
  return(
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
  )
}


