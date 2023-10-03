let pokemons = ["pikachu","charmander", "bulbasaur"]
console.log(pokemons)

console.log(pokemons[0])
console.log(pokemons[1])
console.log(pokemons[2])

pokemons.forEach(pokemon => {
    console.log(pokemon)
});

pokemons.pop()
pokemons.forEach(pokemon => {
    console.log(pokemon)
});


