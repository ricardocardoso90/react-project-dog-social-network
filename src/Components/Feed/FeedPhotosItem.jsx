import { Image } from '../Helpers/Image/Image';
import styles from './FeedPhotosItem.module.scss';

/* eslint-disable react/prop-types */
export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.preview}>{photo.acessos}</span>
    </li>
  )
}