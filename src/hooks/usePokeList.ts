import { useEffect, useState } from "react"
import { Pagination } from "../interfaces/pokemon-interfaces";
import { list_pokemons } from './../services/pokemon-api';

interface PokemonListState {
    data: Pagination | null;
    loading: boolean;
    error: boolean;
    message: string;
}

export const usePokeList = (offset: number = 20, limit: number = 20) => {

    const [pokemonListState, setPokemonListState] = useState<PokemonListState>({
        data: null,
        loading: false,
        error: false,
        message: '',
    });

    useEffect(() => {
      getListPokemons();
    }, [offset, limit]);
    

    const loadingState = () => setPokemonListState({
        data: null,
        loading: true,
        error: false,
        message: '',
    });

    const getListPokemons = async () => {
        loadingState();
        
        const { status, statusText, data } = await list_pokemons(offset, limit);

        if(status !== 200) {
            setPokemonListState({
                data: null,
                loading: false,
                error: true,
                message: statusText,
            });

            return;
        }

        setPokemonListState({
            data,
            loading: false,
            error: false,
            message: '',
        });
    }

    return {...pokemonListState};
}
