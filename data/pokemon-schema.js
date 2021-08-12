// Construct Pokemon Data Objects from multiple endpoints:

// Step 1:
// 	Loop through "gen1" pokemon array
// 	For each item, make a fetch to the item URL
// 	Save & return results in variable

// Step 2:
// 	Munge result from step 1 to show requested data
// 		- name, types, abilities, moves, species, base_stats(hp, atk, def, spa, spd, spe), weight, height, sprites(front, back)
// 	Store new Pokemon object in DB

// Step 3:
// 	Make fetch call to species URL from pokemon object
// 	Munge remaining requested data into pokemon object
// 	Store updated pokemon object in DB

const pokemon = {
    // from pokemon endpoint
    name: '',
    types: [],
    abilities: [],
    moves: [],
    evolutions: [],
    base_stats: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0,
    },
    weight: 0,
    height: 0,
    sprites: {
        front: '',
        back: '',
    },
    // from pokemon-species endpoint
    flavor_text: '',
    color: '',
    egg_groups: [],
    catch_rate: 0,
    base_happiness: 0,
    is_shiny: false,
    is_mega: false,
    is_legendary: false,
    is_mythical: false,
    habitat: '',
    pokedex_number: 0,
};

module.exports = pokemon;
