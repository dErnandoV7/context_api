import { CounterContext } from "../context/CounterContext"

import { useContext } from "react"

const Contact = () => {
    const { counter, setCounter } = useContext(CounterContext)
    const newValue = counter + 1
    return (
        <div>
            <h1>Contact</h1>

            <button onClick={() => setCounter(newValue)}>Mudar valor do counter</button>
            <h3>Counter (contato): {counter}</h3>
        </div>
    )
}

export default Contact