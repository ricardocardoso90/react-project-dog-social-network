// import '../../globals.scss'
import styles from './LoginForm.module.scss'
import stylesBtn from '../../Components/Forms/Button/Button.module.scss'

import { Link } from 'react-router-dom'
import { Input } from '../../Components/Forms/Input/Input';
import { Button } from '../../Components/Forms/Button/Button';
import { useForm } from '../../Hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Error } from '../../Components/Helpers/Error/Error';
import { Head } from '../../Components/Helpers/Head/Head';

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
    <section className='anime-left'>
      <Head title='Login' />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading
          ? <Button disabled>Carregando</Button>
          : <Button>Entrar</Button>
        }

        <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles['sub-title']}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no Site.</p>
        <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}