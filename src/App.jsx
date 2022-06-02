import { useState } from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import UserInput from './components/UserInput'
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<UserInput/>}/>
        
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokemons/>}/>
          <Route path="/pokedex/:id" element={<PokemonDetail/>}/>
        </Route>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App

