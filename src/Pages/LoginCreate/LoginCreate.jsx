// import styles from './LoginCreate.module.scss';
import { useContext } from 'react';
import { Button } from '../../Components/Forms/Button/Button';
import { Input } from '../../Components/Forms/Input/Input';
import { useForm } from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../Context/UserContext';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../../Components/Helpers/Error/Error';
import { Head } from '../../Components/Helpers/Head/Head';

export function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
    // console.log(response);
    // const json = await response.json();
    // console.log(json);
  }

  return (
    <section className='anime-left'>
      <Head title='Crie sua conta' />
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading
          ? <Button disabled>Cadastrando...</Button>
          : <Button>Cadastrar</Button>
        }
        <Error error={error} />
      </form>
    </section>
  )
}