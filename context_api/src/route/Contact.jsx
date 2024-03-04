// 3. Alterando valor do context

// 4. Refatorando com hook - Consumindo e alterados dados do contexto usando hook

import { useCounterContext } from "../hooks/useCounterContext"

// 5. Contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColor'

const Contact = () => {
    const { counter, setCounter } = useCounterContext()
    const newValue = counter + 1
    
    const { color } = useTitleColorContext()

    return (
        <div>
            <h1 style={{ color }}>Contact</h1>

            <button onClick={() => setCounter(newValue)}>Mudar valor do counter</button>
            <h3>Counter (contato): {counter}</h3>
        </div>
    )
}

export default Contact