import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const context = createContext()
const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const Inc = (val) => setCount(count + val)
    const Dec = (val) => setCount(count - val)
    return (
        <context.Provider value={{ count, Inc, Dec }}> {children} </context.Provider>
    )
}

export default ContextProvider