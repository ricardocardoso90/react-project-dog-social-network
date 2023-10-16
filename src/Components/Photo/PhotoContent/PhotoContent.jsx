/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../PhotoContent/PhotoContent.module.scss';
import { PhotoComments } from '../PhotoComments/PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { PhotoDelete } from '../PhotoDelete/PhotoDelete';
import { Image } from '../../Helpers/Image/Image';

export function PhotoContent({ data, single }) {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author
              ? <PhotoDelete id={photo.id} />
              : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            }
            <span className={styles.preview}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  )
}