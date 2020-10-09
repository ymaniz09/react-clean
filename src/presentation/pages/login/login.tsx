import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols'
import { Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}
const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
    await authentication.auth({
      email: state.email,
      password: state.password
    })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <FormContext.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="your e-mail"/>
          <Input type="password" name="password" placeholder="your password"/>
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            className={Styles.submit}
            type="submit">Login
          </button>
          <span className={Styles.link}>Sign Up</span>
          <FormStatus/>
        </form>
      </FormContext.Provider>
      <Footer/>
    </div>
  )
}

export default Login
