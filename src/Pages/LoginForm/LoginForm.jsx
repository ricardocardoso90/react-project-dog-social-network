import styles from './LoginForm.module.scss'

import { Link } from 'react-router-dom'
import { Input } from '../../Components/Forms/Input/Input';
import { Button } from '../../Components/Forms/Button/Button';
import { useForm } from '../../Hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
// import { useEffect } from 'react';

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles['login-form']}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading
          ? <Button disabled>Carregando</Button>
          : <Button>Entrar</Button>
        }

        {error && <p>{error}</p>}
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}