import { PokemonList } from "./components/PokemonList"
import { useState } from "react"
import { PokemonPrincipal } from "./components/PokemonPrincipal"


export const PokedexApp = () => {

    const [pokemonSelect, setPokemonSelect] = useState<string | null>(null);

    return (
        <>
            <h1>Pokedex</h1>
            <hr />

            <section className="flex flex-row">
                { /* Listado  */ }
                <PokemonList onSelectPokemon={ setPokemonSelect } />

                { /* Mostrar o  */ }
                <PokemonPrincipal name={ pokemonSelect } />
            </section>
        </>
    )
}
