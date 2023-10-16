// import styles from './User.module.scss';
import { UserHeader } from './UserHeader/UserHeader';
import { Routes, Route } from 'react-router-dom';

import { Feed } from '../../Components/Feed/Feed';
import { UserPhotoPost } from './UserPhotoPost/UserPhotoPost';
import { UserStats } from './UserStats/UserStats';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { NotFound } from '../../Components/NotFound/NotFound';
import { Head } from '../../Components/Helpers/Head/Head';

export function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title='Minha Conta' />
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}