/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './PhotoCommentsForm.module.scss';
import { useFetch } from '../../../Hooks/useFetch';

import Enviar from '../../../assets/Enviar.svg';
import { COMMENT_POST } from '../../../api';
import { Error } from '../../Helpers/Error/Error';

// eslint-disable-next-line react/prop-types
export function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  function handleChange(e) {
    setComment(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='comente...'
        value={comment}
        onChange={handleChange}
      />
      <button className={styles.button}>
        <img src={Enviar} />
      </button>
      <Error error={error} />
    </form>
  )
}