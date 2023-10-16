import styles from './UserHeader.module.scss';
import { UserHeaderNav } from "../UserHeaderNav/UserHeaderNav";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function UserHeader() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/conta':
        setTitle('Minha Conta');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}