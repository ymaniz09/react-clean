import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <FormContext.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="your e-mail"/>
          <Input type="password" name="password" placeholder="your password"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Login</button>
          <span className={Styles.link}>Sign Up</span>
          <FormStatus/>
        </form>
      </FormContext.Provider>
      <Footer/>
    </div>
  )
}

export default Login
