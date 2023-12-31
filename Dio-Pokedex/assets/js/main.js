const pokemonList = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")

const maxRecords = 151
const limit = 6
let offset = 0
let qtdPokemons = 2


let totalStats = (pokemon) => {

    let total = 0

    pokemon.status.map((valorTotal) => {
        let total2 = valorTotal.base_stat
        total += total2
        
    })
    return total
    
}

let openInfo = (x) => {
    let divInfo = document.querySelectorAll(".pokeInfo")
    let botaoInfo = document.querySelectorAll(".pMenu")
    for(let i = 0; i < divInfo.length; i++) {
        if (i == (x)) {
            divInfo[i].classList.add("visivel")
            botaoInfo[i].classList.add("clicado")
        } else {
            divInfo[i].classList.remove("visivel")
            botaoInfo[i].classList.remove("clicado")
        }
    }    
}

const loadPokemonItens = (offset, limit) => {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        const newHtml = pokemons.map((pokemon) =>
        `
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
            
            
        `).join("")
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)



loadMoreButton.addEventListener("click", () => {
    offset += limit

    const qtdRecordsWithNexPage = offset + limit
    qtdPokemons = qtdRecordsWithNexPage

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    
})