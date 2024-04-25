import { useState, createContext } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{

    const [selectTheme, setSelectTheme] = useState(true)
    const hendleTheme = () => {setSelectTheme(!selectTheme)}

    return(
        <ThemeContext.Provider value={{selectTheme, hendleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}