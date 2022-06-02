import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const PokemonCard = ({pokemonName, pokemonUrl}) => {

const [pokemon, setPokemon] = useState({})

const navigate = useNavigate()

    useEffect(()=>{
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])
    console.log(pokemon)
    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} className="pokemonCard">            
            <img src={pokemon.sprites?.["front_default"]}/>
            <div className='pokemonCardName'>
                <h2>{pokemon.name}</h2>   
            </div>
        </div>
    );
};

export default PokemonCard;