import  { useContext } from "react";

import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";

export default function Button({children}) {
    const {theme,setTheme} = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
