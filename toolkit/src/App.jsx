import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './redux/todoSlice'
import { fetchBlogs } from './redux/blog/blogApi'

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
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])
  return (
    <div>
      <button onClick={addTodo}>Add TODO</button>
    </div>
  )
}

export default App