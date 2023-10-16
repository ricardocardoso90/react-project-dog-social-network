// import styles from './Home.module.scss';
import { Feed } from '../../Components/Feed/Feed';
import { Head } from '../../Components/Helpers/Head/Head';

export function Home() {
  return (
    <section className='container main-container'>
      <Head 
      title='Fotos'
      description='Home do site Dogs, com o Feed de fotos.'
      />
      <Feed />
    </section>
  )
}