const pokeApi = {}

const convertPokeApiDetailToPokemon = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.moves = pokeDetail.moves
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.abilities = pokeDetail.abilities
    pokemon.status = pokeDetail.stats

    pokemon.moves = pokeDetail.moves

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all (detailRequests))
        // .then((response) => console.log(response))
        .then((pokemonsDetails) => pokemonsDetails)
}
