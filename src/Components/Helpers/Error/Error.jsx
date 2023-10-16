import styles from './Error.module.scss';

// eslint-disable-next-line react/prop-types
export function Error({error}) {
  if (!error) return null;

  return (
    <p className={styles.error}>{error}</p>
  )
}