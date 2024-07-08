import { Route, Routes } from 'react-router-dom';

import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';
import PokemonInfo from './components/PokemonInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import NoPage from './components/NoPage';
import FighterA from './components/FighterA';
import FighterB from './components/FighterB';
import './index.css'
function App() {


  return (
    <div>
      <Header />
        <Routes >
          <Route path='/'element = {<Pokemon />} >
            <Route path='/fighterA/:pokemonId' element = {<FighterA />} />
            <Route path='/fighterB/:pokemonId' element = {<FighterB />} />
          </Route>
            <Route path='/:id' element = {<PokemonDetails />} />
            <Route path='/:id/:info' element = {<PokemonInfo />}/>
            <Route path='*' element = {< NoPage/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
