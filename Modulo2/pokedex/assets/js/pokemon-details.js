
const pokemonDetails = document.getElementById('pokemonDetails')

function convertPokemonToPageDetails(pokemon) {
    return `
  
            <div class="pokemon ${pokemon.type}">
                <div class="infos">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span>
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
            <div class="details">
                <div class="title-section">About</div>
                <table class="table">
                    <tr>
                        <th>Species</th>
                        <td>Seed</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>0,70cm</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>6,9kg</td>
                    </tr>
                    <tr>
                        <th>Abilities</th>
                        <td>Overgrow,Chlorophyl</td>
                    </tr>
                </table>
                <div class="subTitle-section">Breading</div>
                <table class="table">
                    <tr>
                        <th>Species</th>
                        <td>Seed</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>0,70cm</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>6,9kg</td>
                    </tr>
                    <tr>
                        <th>Abilities</th>
                        <td>Overgrow,Chlorophyl</td>
                    </tr>
                </table>
            </div>
 
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToPageDetails).join('')
        pokemonDetails.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)
