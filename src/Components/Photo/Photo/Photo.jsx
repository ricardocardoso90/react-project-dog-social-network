import { useParams } from 'react-router-dom';
// import styles from './Photo.module.scss';
import { useFetch } from '../../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../../api';
import { Error } from '../../Helpers/Error/Error';
import { Loading } from '../../Helpers/Loading/Loading';
import { PhotoContent } from '../PhotoContent/PhotoContent';
import { Head } from '../../Helpers/Head/Head';

export function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />
  if (loading) return <Loading />

  if (data)
    return (
      <section className='container main-container'>
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null;
}