let convertPokemonTypesToLi = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

let convertPokemonToLi = (pokemon) => {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.querySelector("#pokemonList")

    pokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join("")
        pokemonList.innerHTML = newHtml
    })
