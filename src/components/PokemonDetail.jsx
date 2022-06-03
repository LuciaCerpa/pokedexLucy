import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const PokemonDetail = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setPokemon(res.data))
    },[])
    
    return (
        <div className='pokemonDetailAll'>
                       
            <div className='pokemonDetail'>

                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3be21906-104d-44dc-88b9-bd4d0c332450/danm4kn-fad76ebf-31cf-4cdf-a862-95c2603a1a4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiZTIxOTA2LTEwNGQtNDRkYy04OGI5LWJkNGQwYzMzMjQ1MFwvZGFubTRrbi1mYWQ3NmViZi0zMWNmLTRjZGYtYTg2Mi05NWMyNjAzYTFhNGQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SyVKS-P1_zFoPjtR4D7dwUoy7U5joQbhWmHExZ4yQEw" alt="" className='pokemonDetailImg' />
                <div className="pokemonDetailDiv">
                <h2>{pokemon.name}</h2>
                    <div className='pokemonDetailDivBotton'>
                        <div>
                            <img src={pokemon.sprites?.["front_default"]}alt="" className='pokemonImg'/>
                        </div>
                        <div>
                            
                            <p>Height: <b>{pokemon.height}</b></p>
                            <p>Weight: <b>{pokemon.weight}</b></p>
                            <p>Type: <b>{pokemon.types?.[0].type.name}</b></p>
                            <p>Ability: <b>{pokemon.abilities?.[0].ability.name}</b></p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className='back'>
                <h2 ><a href="#/pokedex/"><i className='uil-left-arrow-to-left'></i></a></h2>  
            </div>       
        </div>
    );
};

export default PokemonDetail;