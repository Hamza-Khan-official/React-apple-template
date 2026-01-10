import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../../public/login_apple_pic.png'
import image_2 from '../../../../public/login_apple_peple_pic.png'
import style from './Login_.module.css'

const Login_ = () => {
  return (
    <div className={style.main}>
      <br /><br />

      <div className={style.card}>
        <center>
          <div>
            <img src={image} alt="" />
          </div>

          <h1 className={style.heading}>Sign in with Apple Account</h1>
          <br />

          {/* Custom Input */}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className={style.customInput}
          />
        </center>
        <div>
          <Link to={'/React-apple-template/signup'}>
            <p className={style.paragragh}> Create Your Apple Account</p>
          </Link>
        </div>
        <center>
          <div>
            <img src={image_2} alt="" />
          </div>
          <div className={style.pararagh_last_div}>
            <p className={style.pararagh_last}>Your Apple Account information is used to allow you to sign in securely and <br /> access your data. Apple records certain data for security, support, and <br /> reporting purposes. If you agree, Apple may also use your Apple Account <br /> information to send you marketing emails and communications, including <br /> based on your use of Apple services. <span className={style.pararagh_last_color}>See how your data is managed...</span></p>
          </div>
          <div className={style.buttons_div}>
            <button className={style.buttons_div_p_1} type="button" >Continue</button>
            <button className={style.buttons_div_p_2} type="button">Sign in With iPhone</button>
          </div>

        </center>

      </div>

      <br /><br />
      <Link to={'/React-apple-template/'}>Home</Link>
    </div>
  )
}

export default Login_
