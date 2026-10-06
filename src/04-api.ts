const poke = await consultarPoke(445);
console.log(poke);

//Await hace que se consulte a la api
async function consultarPoke(id: number) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        //Siempre ha yque poner la comprabación
        if (!res.ok) {
            console.log("Error")
        }
        const datos = await res.json();
        console.log(datos);
    } catch (e) {
        console.log(`Eror en el fetch: ${e}`);
    }
}
