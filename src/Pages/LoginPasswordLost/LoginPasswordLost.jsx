// import styles from './LoginPasswordLost.Module.scss';
import { Input } from '../../Components/Forms/Input/Input';
import { Button } from '../../Components/Forms/Button/Button';
import { useForm } from '../../Hooks/useForm';
import { useFetch } from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import { Error } from '../../Components/Helpers/Error/Error';
import { Head } from '../../Components/Helpers/Head/Head';

export function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar') //ou 'http://localhost:5173/login/perdeu'
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className='anime-left'>
      <Head title='Perdeu a senha' />
      <h1 className='title'>Perdeu a senha?</h1>
      {data
        ? <p style={{ color: '#4C1' }} > {data}</p>
        : (
          <form onSubmit={handleSubmit}>
            <Input
              label='Email / Usuário'
              type='text'
              name='login'
              {...login}
            />
            {loading
              ? <Button disabled>Enviando...</Button>
              : <Button>Enviar Email</Button>
            }
          </form>
        )
      }
      <Error error={error} />
    </section >
  )
}