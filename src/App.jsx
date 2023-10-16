import './App.scss';
import './globals.scss'

import { MainRoutes } from './Routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'

import { UserStorage } from './Context/UserContext';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='app-body'>
            <MainRoutes />
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App;