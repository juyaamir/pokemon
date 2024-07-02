import { Route, Routes } from 'react-router-dom';

import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';
import PokemonInfo from './components/PokemonInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NoPage from './components/NoPage';

import './index.css'
function App() {


  return (
    <div>
      <Header />

        <Routes>
          <Route path='/' >
            <Route index element = {<Pokemon />} />
            <Route path='/:id' element = {<PokemonDetails />} />
            <Route path='/:id/:info' element = {<PokemonInfo />}/>
            <Route path='*' element = {< NoPage/>} />
          </Route>
        </Routes>
      
      <Footer />
    </div>
  )
}

export default App
