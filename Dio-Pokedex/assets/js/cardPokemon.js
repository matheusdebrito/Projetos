let pokemonDetails = []
let htmlAntigo = ""

let restaurarHtml = () => {
    console.log("restaurando HTML")
    pokemonList.innerHTML = ""
    loadPokemonItens(0, qtdPokemons)
}

let construirHtml = (pokemon) => {
    console.log(pokemon)

    pokemon.number = pokemon.id
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokemon.sprites.other.dream_world.front_default
    pokemon.status = pokemon.stats
    pokemonDetails = pokemon
        
        const htmlCard = 
        `
            <li class="pokemon ${pokemon.type} visivel" id="${pokemon.name}" onclick="pokemonCard(${pokemon.number}")>
                    <div class="teste">
                        <p onclick="restaurarHtml()"><-</p>
                    </div>
                    <div class="infoName" >
                        <span class="name">${pokemon.name}</span>
                        <span class="number">#${pokemon.number}</span>
                    </div>
                    <div class="detail">
                        <ol class="types" >
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                        <img src="${pokemon.sprites.other.dream_world.front_default}"
                            alt="${pokemon.name}">
                    </div>
                    <div class="information visivel" id="${pokemon.name}">
                        <div class="menuPokemon">
                            <p class="pMenu clicado" onclick="openInfo(${0})">About</p>
                            <p class="pMenu" onclick="openInfo(${1})">Base Stats</p>
                            <p class="pMenu" onclick="openInfo(${2})">Moves</p>
                        </div>
                        <div class="about pokeInfo visivel">
                            <p>Height: ${pokemon.height/10}m</p>
                            <p>Weight: ${pokemon.weight/10}kg</p>
                            <p>Abilities: ${pokemon.abilities.map((habilidade) => habilidade.ability.name).join(", ")}</p>
                        </div>
                        <div class="baseStats pokeInfo">
                            ${pokemon.stats.map((stats) => `
                                <div class="add">
                                    <p>${stats.stat.name}: ${stats.base_stat}</p><meter min="0" max="200" value=${pokemon.stats.map((valor) => valor.base_stat).join(" ")}</meter>
                                </div>
                            `).join("")}
                            <div class="add">
                                <p>total: ${totalStats(pokemon)}</p>
                                <meter min="0" max="1000" value=${totalStats(pokemon)}></meter>
                            </div>
                        </div>               
                        <div class="moves pokeInfo">
                            ${pokemon.moves.map((move) => `<p>${move.move.name}</p>`).join("")}
                        </div>
                    </div>
                    
            </li>
         `
    pokemonList.innerHTML = htmlCard
    window.scrollTo(0, 0)

    htmlAntigo = `
        <li class="pokemon ${pokemon.type}" id="${pokemon.name}">
            <div class="teste">
                <p onclick="fechaInfo()">x</p>
            </div>
            <div class="infoName" onclick="pokemonCard(${pokemon.number})">
            <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>
            </div>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
            <div class="information" id="${pokemon.name}">
                <div class="menuPokemon">
                    <p class="pMenu" onclick="openInfo(${0})">About</p>
                    <p class="pMenu" onclick="openInfo(${1})">Base Stats</p>
                    <p class="pmenu" onclick="openInfo(${2})">Moves</p>
                </div>
                <div class="about visivel">
                    <p>Height: ${pokemon.height/10}m</p>
                    <p>Weight: ${pokemon.weight/10}kg</p>
                    <p>Abilities: ${pokemon.abilities.map((habilidade) => habilidade.ability.name).join(", ")}</p>
                </div>
                <div class="baseStats">
                    ${pokemon.status.map((status) => `
                        <div class="add">
                            <p>${status.stat.name}: ${status.base_stat}</p><meter min="0" max="200" value=${pokemon.status.map((valor) => valor.base_stat).join(" ")}</meter>
                        </div>
                    `).join("")}
                    <div class="add">
                        <p>total: ${totalStats(pokemon)}</p>
                        <meter min="0" max="1000" value=${totalStats(pokemon)}></meter>
                    </div>
                </div>               
                <div class="moves ">
                    ${pokemon.moves.map((move) => `<p>${move.move.name}</p>`).join("")}
                </div>
            </div>
            
        </li>
    `

}


let chamaApi = (pokemonNumber) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((response) => response.json())
    .then((pokemons) => pokemon = pokemons)
    .then((pokemon) => pokemon = pokemon)
    // .then((pokemon) => console.log("api funcionando"))
    .then((pokemon) => construirHtml(pokemon))
    .then((pokemon) => console.log(pokemon))
    // .then((pokemon) => construirHtml(pokemon))
}

let pokemonCard = (pokemonNumber) => {
    chamaApi(pokemonNumber)
}




