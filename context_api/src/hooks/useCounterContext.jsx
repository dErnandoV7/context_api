import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export const useCounterContext = () => {
    try {
        const context = useContext(CounterContext)
        if (context) return context

    } catch (error) {
        return "Contexto não encontrado"
    }
}