// 1. Criar context
import { createContext, useState } from "react";

export const CounterContext = createContext(null)

// 2. Criando Provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(1)


    return (
        <CounterContext.Provider value={{counter, setCounter}}>{children}</CounterContext.Provider>
    )
}
