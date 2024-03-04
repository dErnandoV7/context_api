import { useContext } from "react"
import { TitleColorContext } from "../context/TitleColorContext"

export const useTitleColorContext = () => {
    try {
        const context = useContext(TitleColorContext)
        if (context) return context

    } catch (error) {
        return "Contexto não encontrado"
    }
}