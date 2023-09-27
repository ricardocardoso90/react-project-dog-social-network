import { Navigate, Route, Routes } from 'react-router-dom'
import styles from './Login.module.scss'

import { LoginForm } from '../LoginForm/LoginForm'
import { LoginCreate } from '../LoginCreate/LoginCreate'
import { LoginPasswordLost } from '../LoginPasswordLost/LoginPasswordLost'
import { LoginPasswordReset } from '../LoginPasswordReset/LoginPasswordReset'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export function Login() {
  const { login } = useContext(UserContext);
  if (login === true) {
    return <Navigate to='/conta' />
  }

  return (
    <div className={styles.login}>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='perdeu' element={<LoginPasswordLost />} />
        <Route path='resetar' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}