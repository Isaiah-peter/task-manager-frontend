import React from 'react'
import '../../style/reg-log.css'
import icon from "../../assets/reg-icon"

const Login = () => {
  return (
    <div className="reg-container">
      <div className="reg-wrapper">       
        <div class="input-container">
          <h1 class="reg-header">Login</h1>
          <form className='input-wrapper'>
            <div className='input-field'>
              <img src={icon.userIcon2} className='input-icon'/>
              <input placeholder='Enter Username' />
            </div>
            <div className='input-field'>
              <img src={icon.lock} className='input-icon'/>
              <input placeholder='Enter Password' />
            </div>
          </form>

          <div className='terms-wrapper'>
            <input type="checkbox" name="term" className='term-checkbox'/>
            <p>Remember me</p>
          </div>

          <button className='reg-btn login'>Login</button>

          <p className='login-option'>Or, Login with  <a><img src={icon.facebook} /></a> <a> <img src={icon.google} /> </a> <a><img src={icon.x} alt="" /></a></p>

          <p className='terms-wrapper'>Don’t have an account? <a href='/'>Create One</a></p>
        </div>
        <div class="image-container">
          <img src={icon.loginImage} className="loginIcon" />
        </div>
      </div>
    </div>
  )
}

export default Login