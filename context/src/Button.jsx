import React from 'react'
import { useContext } from 'react'
import { context } from './context/ContextProvider'

const Button = () => {
    const { Dec } = useContext(context)
    return (<div>
        <button onClick={() => Dec(5)}>dec</button>
    </div>

    )
}

export default Button