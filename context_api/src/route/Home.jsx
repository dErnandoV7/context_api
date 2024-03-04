
import { CounterContext } from '../context/CounterContext'

import { useContext } from 'react'
const Home = () => {
    const { counter, setCounter } = useContext(CounterContext)
    const newValue = counter + 1
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => setCounter(newValue)}>Mudar valor do counter</button>
            <h3>Counter (home): {counter}</h3>
        </div>
    )
}

export default Home