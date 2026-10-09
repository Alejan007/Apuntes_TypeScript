interface Pokemon {
    [x: string]: any;
    id: number;
    name: string;
    height: number;
    weight: number;
}
//Calcular el 5 números aleatorioss
async function obtener5Pokemones() {
    for (let i = 0; i < 5; i++) {
        const id = Math.floor(Math.random() * 1025) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();

        console.log(pokemon.name);
    }
}

obtener5Pokemones();

//En un bucle, pasa cada número:
// consultar la Api
//Guardar nombre, peso, altura, id

async function consultarPokemon(id: number): Promise<Pokemon | null> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            console.log(`Error al obtener el Pokémon ${id}`);
            return null;
        }

        const datos = await res.json();

        const pokemon: Pokemon = {
            id: datos.id,
            name: datos.name,
            height: datos.height,
            weight: datos.weight
        };

        return pokemon;
    } catch (e) {
        console.log(`Error en el fetch: ${e}`);
        return null;
    }
}


consultarPokemon(445).then((pokemon) => {
    console.log(pokemon);
})

//Filtrar por el pokemon mas pesado(devolver el nombre 'El pokemon Más pesado es nombre co npeso KG')

function obtenerPokemonMasPesado(lista: Pokemon[]): string {
    if (lista.length === 0) {
        return "La lista está vacía.";
    }

    const maxPeso = Math.max(...lista.map((p) => p.weight));

    const masPesado = lista.filter((p) => p.weight === maxPeso)[0];

    const pesoEnKg = masPesado.weight / 10;

    // ✅ Correcto (backticks / comillas invertidas)
    return `El pokemon mas pesado es ${masPesado.name} con peso ${pesoEnKg} Kg`;

}

const misPokemones: Pokemon[] = [
    { id: 25, name: "pikachu", height: 4, weight: 60 },
    { id: 6, name: "charizard", height: 17, weight: 905 },
    { id: 143, name: "snorlax", height: 21, weight: 4600 }
];

console.log(obtenerPokemonMasPesado(misPokemones));