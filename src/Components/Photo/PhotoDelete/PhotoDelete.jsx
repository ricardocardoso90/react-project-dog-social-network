import { useFetch } from '../../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../../api';
import styles from './PhotoDelete.module.scss';

// eslint-disable-next-line react/prop-types
export function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading
        ? <button disabled className={styles.delete}>Deletar</button>
        : <button onClick={handleClick} className={styles.delete}>Deletar</button>}
    </>
  )
}