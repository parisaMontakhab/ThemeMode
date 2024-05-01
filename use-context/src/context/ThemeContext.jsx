import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(){
    return(
        <ThemeContext.Provider>

        </ThemeContext.Provider>
    )
}
