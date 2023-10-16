import styles from './UserPhotoPost.module.scss';
import { useEffect, useState } from 'react';

import { Input } from '../../../Components/Forms/Input/Input';
import { Button } from '../../../Components/Forms/Button/Button';
import { useForm } from '../../../Hooks/useForm';
import { useFetch } from '../../../Hooks/useFetch';
import { PHOTO_POST } from '../../../api';
import { Error } from '../../../Components/Helpers/Error/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../../../Components/Helpers/Head/Head';

export function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate])

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.raw);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange(e) {
    setImg({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    });
  }

  return (
    <section
      className={`${styles['photo-post']} anime-left`}>
      <Head title='Poste sua foto' />
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
        {loading
          ? <Button disabled>Enviando...</Button>
          : <Button>Enviar</Button>
        }
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}>
          </div>
        )}
      </div>
    </section>
  )
}