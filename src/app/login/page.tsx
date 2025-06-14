import React from 'react'
import '@/styles/pages/login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-container__form'>
        <span className='login-title'>
          Entrar
        </span>

        <br />
        <br />
        <br />
        <form action="submit">
          <label htmlFor='email'>
            <input type='email' id="email" name="email" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Login;