import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config/api';

const TaskDetails = () => {
  const [text, setText] = useState("dummy-task-details")
  const { id } = useParams()
  console.log(id);
  const getTaskDetails = async () => {
    let res = await API.get(`/task/${id}`)
    console.log(res.data);

  }

  const createStatus = async () => {
    let status = {
      text,
      task: id
    }
    let res = await API.post(`/status/`, status)
    console.log(res);

  }
  useEffect(() => {
    getTaskDetails();
  }, [])
  return (
    <div>
      <button onClick={createStatus}>add status</button>
    </div>
  )
}

export default TaskDetails