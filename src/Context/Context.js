import { createContext } from "react";
import React from "react";

const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [theme, setTheme] = React.useState(localStorage.getItem("darkMode") || "light");

    const data = {
        theme, setTheme
    }


    return(

        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
    

export default Context