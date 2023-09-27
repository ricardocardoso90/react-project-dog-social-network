import styles from './Button.module.scss'

// eslint-disable-next-line react/prop-types
export function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}