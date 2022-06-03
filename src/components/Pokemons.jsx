import React from 'react';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';


const Pokemons = () => {
    const user = useSelector(state => state.user)
    const [pokemonSearch, setPokemonSearch] = useState("")
    const navigate = useNavigate()
    const [types, setTypes] = useState([])

    const [pokemons, setPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage] = useState(10)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
        .then(res=> setPokemons(res.data.results));
       

        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res=> setTypes(res.data.results))
    },[])

    const search = () =>{        
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemons = e =>{
        axios.get(e.target.value)
        .then(res=>setPokemons(res.data.pokemon))
        .catch(e=>console.log(e))
    }
    const indexOfLastPokemon = currentPage * pokemonsPerPage;

    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage

    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className='pokemons'>
            
            <h1>Pokemons</h1>
            <h3>Bienvenid@ {user}</h3>
            <select onChange={filterPokemons}><option value="1">Types</option>
            {
                types.map(type =>(
                    <option value={type.url} key={type.id}>{type.name}</option>
                ))

            }
            
            
            </select>
            <div>
                <input type="text" value={pokemonSearch} onChange={e =>setPokemonSearch(e.target.value)} placeholder="Search pokemon"/>
                <button onClick={search}>Search</button>
            </div>
            <div className='pokedex'>
            {
                
                currentPokemons.map(pokemon =>(//en este case character puede ser un objeto o un string

                //hagan console.log con la pokeapi es distinto

                //pokemon.url?pokemon.url:pokemon.pokemon.url
                
                    <PokemonCard pokemonName = {pokemon.name} pokemonUrl={pokemon.url?pokemon.url:pokemon.pokemon.url} key={pokemon.url?pokemon.url:pokemon.pokemon.url}/>
                
               
                ))
            }
                <Pagination pokemonsPerPage={pokemonsPerPage}  totalPokemons={pokemons.length} paginate={paginate}/>
                
            
            
            </div>
        </div>
    );
};

export default Pokemons;