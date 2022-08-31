import {createContext, useReducer} from 'react'
import darkModeReducer from './DarkModeReducer'

const DarkModeContext = createContext()

export const DarkModeProvider = ({Children}) => {
    const initialState = {
        darkMode: false
    }
    const [state , dispatch] = useReducer(darkModeReducer , initialState)
    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode , dispatch}}>
            {Children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext