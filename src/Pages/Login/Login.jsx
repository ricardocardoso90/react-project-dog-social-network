import styles from './Login.module.scss'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginForm } from '../LoginForm/LoginForm'
import { LoginCreate } from '../LoginCreate/LoginCreate'
import { LoginPasswordLost } from '../LoginPasswordLost/LoginPasswordLost'
import { LoginPasswordReset } from '../LoginPasswordReset/LoginPasswordReset'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { NotFound } from '../../Components/NotFound/NotFound'

export function Login() {
  const { login } = useContext(UserContext);
  if (login === true) {
    return <Navigate to='/conta' />
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}