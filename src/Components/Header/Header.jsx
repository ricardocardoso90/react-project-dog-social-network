import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import { useContext } from 'react';

// import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import Dogs from '../../assets/dogs.svg'
import { UserContext } from '../../Context/UserContext';

export function Header() {
  // eslint-disable-next-line no-unused-vars
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <img src={Dogs} alt="Imagem de um Dog" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <button
              style={{ cursor: 'pointer' }}
              onClick={userLogout}>
              Sair
            </button>
          </Link>
        ) :
          <Link className={styles.login} to="/Login">
            Login / Criar
          </Link>
        }
      </nav>
    </header>
  )
}