/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './FeedModal.module.scss';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import { Error } from '../Helpers/Error/Error';
import { Loading } from '../Helpers/Loading/Loading';
import { PhotoContent } from '../Photo/PhotoContent/PhotoContent';

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}