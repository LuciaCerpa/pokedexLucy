import React from 'react';

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    const pageNumbers = []
    for(let i=1; i<= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={()=> paginate(number)} href="/pokemons/#/pokedex">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;