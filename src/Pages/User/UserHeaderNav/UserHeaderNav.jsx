import styles from './UserHeaderNav.module.scss';

import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { UserContext } from '../../../Context/UserContext';

import MinhasFotos from '../../../assets/feed.svg';
import Estatisticas from '../../../assets/estatisticas.svg';
import AdicionarFoto from '../../../assets/adicionar.svg';
import Sair from '../../../assets/sair.svg';
import { useMedia } from '../../../Hooks/useMedia';

export function UserHeaderNav() {
  const navigate = useNavigate();
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation('');
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);


  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button aria-label='Menu'
          className={`
            ${styles['mobile-button']} 
            ${mobileMenu && styles['mobile-button-active']}`}
          onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}
      <nav className={`
        ${mobile ? styles['nav-mobile'] : styles.nav} 
        ${mobileMenu && styles['nav-mobile-active']}`}>

        <NavLink to='/conta' end>
          <img src={MinhasFotos} alt="Minhas Fotos" />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <img src={Estatisticas} alt="Estatisticas" />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <img src={AdicionarFoto} alt="Adicionar Foto" />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={handleLogout}>
          <img src={Sair} alt="Sair" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}