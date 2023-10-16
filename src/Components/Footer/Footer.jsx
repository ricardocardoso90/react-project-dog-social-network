import styles from './Footer.module.scss';
import DogsFooter from '../../assets/dogs-footer.svg';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={DogsFooter} alt='Logo do Dog no Footer.' />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}