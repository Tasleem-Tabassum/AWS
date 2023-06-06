import React from 'react'
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';



const Home = () => {

  return (
    <div>
        <h1>Image Processing using AWS</h1>
      <div id="loginreigster">
        <div>
        <LoginPage/>
        </div>
        <div id="register">
          <h3>New User? </h3><Link to="/register">Register Here</Link>
        </div>
      </div>
    </div>
  )
}

export default Home