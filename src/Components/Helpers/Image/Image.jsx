/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Image.module.scss';

export function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(e) {
    setSkeleton(false);
    e.target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}