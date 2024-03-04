// 3. Alterando valor do context

// 4. Refatorando com hook - Consumindo e alterados dados do contexto usando hook

import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {
    const { counter, setCounter } = useCounterContext()
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