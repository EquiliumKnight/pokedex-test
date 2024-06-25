import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/pokemon";
import { getPokemon } from "../services/pokemon-api";

interface StatePokemon {
    data: Pokemon | null;
    loading: boolean;
    error: boolean;
    message: string;
}

export const usePokemon = (name: string) => {
    
    const [pokemonState, setPokemonState] = useState<StatePokemon>({
        data: null,
        loading: false,
        error: false,
        message: '',
    });

    useEffect(() => {
        getPokemonByName();
    }, [name])


    const loadingState = () => setPokemonState({
        data: null,
        loading: true,
        error: false,
        message: '',
    });

    const getPokemonByName = async () => {
        loadingState();

        const { data, status, statusText } = await getPokemon(name);

        if(status !== 200) {
            setPokemonState({
                data: null,
                loading: false,
                error: true,
                message: statusText
            });

            return;
        }

        setPokemonState({
            data,
            loading: false,
            error: false,
            message: ''
        });
    }


    
    return {...pokemonState};
}
