interface Persona {
    nombre: string;
    edad: number;
    saldo: number;
}

const personas: Persona[] = [
    { nombre: "pepe", edad: 34, saldo: 15787 },
    { nombre: "Ana", edad: 27, saldo: 157 },
    { nombre: "Alex", edad: 18, saldo: 5787 },
    { nombre: "Juan", edad: 87, saldo: 787 },
];

const rica= personas.reduce((old, e) => {
    if(e.saldo > old.saldo){
        return e;
    }else{
        return old;
    }
}, {nombre: "", edad: 0, saldo: -1});
console.log(rica);