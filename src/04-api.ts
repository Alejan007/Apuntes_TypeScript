interface Pokemon {
    id: number;
    name: string;
}

//Await hace que se consulte a la api
async function consultarPoke(id: number): Promise<Pokemon | null> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        //Siempre hay que poner la comprabación
        if (!res.ok) {
            console.log("Error");
            return null;
        }

        const datos = await res.json();
        const pokemon: Pokemon = {
            id: datos.id,
            name: datos.name
        };

        console.log(datos);
        return pokemon;
    } catch (e) {
        console.log(`Eror en el fetch: ${e}`);
        return null;
    }
}

// Función envolvente para ejecutar await a nivel superior
async function main() {
    const poke = await consultarPoke(445);
    console.log(poke);
}

main();