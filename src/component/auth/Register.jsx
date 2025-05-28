import React from 'react'
import '../../style/reg-log.css'
import icon from "../../assets/reg-icon"

const Register = () => {
  return (
    <div className="reg-container">
      <div className="reg-wrapper">
          <div class="image-container">
            <img src={icon.regIcon} className="regIcon" />
          </div>
          <div class="input-container">
            <h1 class="reg-header">Sign Up</h1>
            <form className='input-wrapper'>
              <div className='input-field'>
                <img src={icon.userIcon} className='input-icon'/>
                <input placeholder='Enter First Name' />
              </div>
              <div className='input-field'>
                <img src={icon.userIcon} className='input-icon'/>
                <input placeholder='Enter Last Name' />
              </div>
              <div className='input-field'>
                <img src={icon.userIcon2} className='input-icon'/>
                <input placeholder='Enter Username' />
              </div>
              <div className='input-field'>
                <img src={icon.email} className='input-icon'/>
                <input placeholder='Enter email' />
              </div>
              <div className='input-field'>
                <img src={icon.lock} className='input-icon'/>
                <input placeholder='Enter Password' />
              </div>
              <div className='input-field'>
                <img src={icon.lightlock} className='input-icon'/>
                <input placeholder='Confirm password' />
              </div>
            </form>

            <div className='terms-wrapper'>
              <input type="checkbox" name="term" className='term-checkbox'/>
              <p>I agree to all terms</p>
            </div>

            <button className='reg-btn'>Register</button>

            <p className='terms-wrapper'>Already have an account?<a href='/'>Signin</a></p>
          </div>
      </div>
    </div>
  )
}

export default Register;
