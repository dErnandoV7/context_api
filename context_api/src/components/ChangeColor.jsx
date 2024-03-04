// 6. Alterando contexto complexo

import { useTitleColorContext } from "../hooks/useTitleColor"

import "./ChangeColor.css"

const ChangeColor = () => {
    const { dispatch } = useTitleColorContext()

    return (

        <div className="cores">
            <button onClick={() => dispatch({type: "BLUE"})}>Azul</button>

            <button onClick={() => dispatch({type: "RED"})}>Red</button>

            <button onClick={() => dispatch({type: "GREEN"})}>Verde</button>
        </div>
    )
}

export default ChangeColor