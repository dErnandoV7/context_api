import { createContext, useReducer } from "react";

export const TitleColorReducer = (state, action) => {
    switch (action.type) {
        case "RED":
            return { ...state, color: "red" }

        case "BLUE":
            return { ...state, color: "blue" }

        case "GREEN":
            return { ...state, color: "green" }

        default:
            return state
    }
}

export const TitleColorContext = createContext()

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TitleColorReducer, { color: "yellow" })

    return (
        <TitleColorContext.Provider value={{ dispatch, ...state }} >{children}</TitleColorContext.Provider>
    )
}