import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from './redux/todoSlice'

const App = () => {
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(add(
      {
        title: "test" + Date.now(),
        id: Date.now(),
        status: false
      }
    ))
  }
  return (
    <div>
      <button onClick={addTodo}>Add TODO</button>
    </div>
  )
}

export default App