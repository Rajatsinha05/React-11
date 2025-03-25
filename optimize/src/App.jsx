import React, { useState } from 'react'
import { getGoogleAuth, LoggedIn, reset, signup } from './config/firebase'
import User from './User'

const App = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const handleGoogleAuth = async () => {
    let userdata = await getGoogleAuth()
    console.log(userdata);

  }

  const handleSignup = async (e) => {
    e.preventDefault()
    let userData = await LoggedIn(email, password)
    console.log(userData);

  }
  const handlereset = async (e) => {
    e.preventDefault()
    let userData = await reset(email)
    console.log(userData);

  }
  return (
    <div>
      {/* <form onSubmit={handleSignup}>
        <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="login" />
      </form>
      <button onClick={handleGoogleAuth}>google</button> */}
      <User/>
    </div>
  )
}

export default App