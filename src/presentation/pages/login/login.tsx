import React from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="your e-mail"/>
        <Input type="password" name="password" placeholder="your password"/>
        <button className={Styles.submit} type="submit">Login</button>
        <span className={Styles.link}>Sign Up</span>
        <FormStatus/>
      </form>
      <Footer/>
    </div>
  )
}

export default Login
