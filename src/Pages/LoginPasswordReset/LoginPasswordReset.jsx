import { useEffect, useState } from 'react';
import { Input } from '../../Components/Forms/Input/Input';
import { useForm } from '../../Hooks/useForm';
import { Button } from '../../Components/Forms/Button/Button';
import { PASSWORD_RESET } from '../../api';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../../Components/Helpers/Error/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../../Components/Helpers/Head/Head';
// import styles from './LoginPasswordReset.Module.scss';

export function LoginPasswordReset() {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');

  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className='anime-left'>
      <Head title='Resete a senha' />
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nova Senha'
          type='password'
          name='password'
          {...password}
        />
        {loading
          ? <Button disabled>Resetando...</Button>
          : <Button>Resetar</Button>
        }
      </form>
      <Error error={error} />
    </section>
  )
}