let timePokemon = [
    ["Pikachu", "M", 1],
    ["Charmander", "M", 2],
    ["Bulbasaur", "M", 4],
]

console.log(timePokemon[0][0])
console.log(timePokemon[0][1])
console.log(timePokemon[0][2])

console.log(timePokemon[1][0])
console.log(timePokemon[1][1])
console.log(timePokemon[1][2])

console.log(timePokemon[2][0])
console.log(timePokemon[2][1])
console.log(timePokemon[2][2])

timePokemon.forEach(pokemon => {
    pokemon.forEach(attribute => {
        console.log(attribute)
    })
});