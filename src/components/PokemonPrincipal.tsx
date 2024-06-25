import React from 'react';
import { PokemonDetail } from './PokemonDetail';
import { PokemonEmpty } from './PokemonEmpty';

interface PropPokemonPrincipal {
    name: string | null;
}

export const PokemonPrincipal: React.FC<PropPokemonPrincipal> = ({ name }) => {
    return (
        <article className="w-full">
            { /* component to show or empty state */ }
            <section className="mt-3 h-full">
                {
                    name 
                    ? (<PokemonDetail name={ name } />) 
                    : (<PokemonEmpty />)
                }
            </section>

        </article>
    );
}
