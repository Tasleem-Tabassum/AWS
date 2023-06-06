import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()

  const [userState, setUserState] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userState)
    axios.post('http://localhost:8080/users', userState)
    .then((res) => {
      console.log('response*********************' + res)
      navigate('/login')
    }).catch((e) => {
      console.log('***************************' + e)
    })
  }
  
  return (
    <div>
        <h3>Register Page</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name' name='name'>Name</label> 
          <input type='text' name='name' id='name' onChange={(e) => setUserState({...userState, name : e.target.value})} placeholder="Type your name here" value={userState.name} required/> 
          <label htmlFor='email' name='email'>Email</label> 
          <input type='email' name='email' id='email' onChange={(e) => setUserState({...userState, email : e.target.value})} placeholder="Type your email address here" value={userState.email} required/> 
          <label htmlFor='password' name='password'>Password</label> 
          <input type='password' name='password' id='password' onChange={(e) => setUserState({...userState,password: e.target.value})} placeholder="Type your password here" value={userState.password} required/> 

          <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default RegisterPage