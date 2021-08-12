import { gen1 } from '../../data/pokemon.js';
import request from 'superagent';

export const fetchPokemon = async () => {
    let pokemonArr = [];
    for (let pokemon of gen1) {
        let poke = {};
        let pokeUrl = pokemon.url;

        const { body } = await request.get(`${pokeUrl}`);

        let pokeStats = {};
        body.stats.map((stat) => {
            // for each stat, get the name from stat.name and the value from stat.base_stat
            return (pokeStats[stat.stat.name] = stat.base_stat);
        });

        poke = {
            name: body.name,
            types: body.types,
            abilities: body.abilities,
            moves: body.moves,
            stats: pokeStats,
            weight: body.weight,
            height: body.height,
            sprites: {
                default: body.sprites.front_default,
                shiny: body.sprites.front_shiny,
            },
        };
        pokemonArr.push(poke);
    }
    return pokemonArr;
};
