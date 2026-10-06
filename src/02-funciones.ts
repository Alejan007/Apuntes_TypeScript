type ID = number | string;
let dni = 12345678;
let dni2 = "1234567E";

type Role = "user" | "admin" | "guest";

interface User{
    name: string,
    rol: Role;
}

const pepe: User = {
    name: "Pepe",
    rol: "user",
}

const saludar3 = (nombre: string) => `Hola ${nombre}.`; 

//Siquiero que un dato dentro de la contante sea opcional se usa ?
interface Persona{
    name: string,
    edad: number,
    cadado?: boolean
}

const ana: Persona ={
    name: "Ana",
    edad : 30,
}

function saludar (nombre: string, apellido?: string){
    if(apellido){
        console.log(`HOla ${nombre} ${apellido}.`)
    }else{
        console.log(`Hola ${nombre} a secas`)
    }
}
console.log(ana)