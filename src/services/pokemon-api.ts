import axios, { AxiosResponse } from 'axios';
import { Pagination } from '../interfaces/pokemon-interfaces';
import { Pokemon } from '../interfaces/pokemon';

const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const list_pokemons = async (offset: number, limit: number): Promise<AxiosResponse<Pagination>> => {
    const response: AxiosResponse<Pagination> = await pokeapi.get('/pokemon', { params: { offset, limit } });
    return response;
}

export const getPokemon = async (name: string): Promise<AxiosResponse<Pokemon>> => {
    const response: AxiosResponse<Pokemon> = await pokeapi.get(`/pokemon/${ name }`);
    return response;
};