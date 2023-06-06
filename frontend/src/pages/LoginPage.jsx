import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [userState, setUserState] = React.useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/users/login', userState)
    .then((res) => {
      console.log('*******response*' + res)

      localStorage.setItem("user", JSON.stringify(res.data))
      console.log(res.data)

      navigate('/addimage')
    }).catch((e) => {
      console.log('***************************' + e)
    })
  }
  

  return (
    <div>
        <h3>Login Here</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email' name='email'>Email</label>
          <input type='email' name='email' id='email' onChange={(e) => setUserState({...userState, email : e.target.value})} placeholder="Type your email address here" value={userState.email} required/>
          <label htmlFor='password' name='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(e) => setUserState({...userState, password: e.target.value})} placeholder="Type your password here" value={userState.password} required/><br/>

          <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default LoginPage