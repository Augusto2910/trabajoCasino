import * as rs from "readline-sync"
import * as fs from 'fs';
import { fabricaJuegos } from "./fabricaJuegos";
import { Casino } from "./Casino";

export class Usuario {
    public nombre: string 
    // protected edad: number 
    protected saldo:number 
    protected casino : Casino
    // private bonoBienvenida : number = 2000

    constructor() {
        this.nombre = ""
        // this.edad = 0
        this.saldo = 2000
        
    }

    public getSaldo() {
        return this.saldo
    }

    public SetSaldo (nuevoSaldo : number) {
        this.saldo = nuevoSaldo
    }

    public getNombre() {
        return this.nombre
    }

    // public getEdad() {
    //     return this.edad
    // }

    public mostrarSaldo()  {
        console.log(`Tu saldo actual es de $${this.saldo}`)
    }

    public sumarSaldo(montoApuesta : number) {
        this.saldo +=montoApuesta
    }

    public restarSaldo(montoApuesta : number) {
        this.saldo -=montoApuesta
    }

    // pedirNombre(){
    // this.nombre = rs.question("Ingresa tu nombre: ") 
    // }
}
    //     bienvenida() {
    //     console.log (`Bienvenido ${this.nombre}, tu bono de bienvenida es de ${this.bonoBienvenida}.`)
    // }


//     public pedirEdad() {
//             this.edad = rs.questionInt ("Ingresa tu edad: ")
//             if (this.edad >= 18) {
//                this.bienvenida()
//                let jugarJuego = () => {
// let juegos = new fabricaJuegos(this) //creo la fabrica de juegos en la variable "juegos"

// juegos.mostrarJuegos() //muestro los juegos disponibles

// let elegirJuego = juegos.jugar() //en "jugar" guardo el juego que elija el usuario


// if (elegirJuego) {  //si la opcion elegida es correcta...
//     elegirJuego.apostar() //ejecuta la funcion de apostar
// }
// }
// jugarJuego()
// let salir = false

//  while(!salir) {
//     let mostrarMenu = console.log("VOLVIENDO AL MENU...")
//                       console.log("---MENÚ DE OPCIONES---")
//                       console.log("1. Mostrar menu de juegos")
//                       console.log("2. Consultar saldo")
//                       console.log("3. Salir del casino") 
                      

//     let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")

//     switch(preguntarUsuario) {
//         case 1: jugarJuego()
//         break
//         case 2: this.mostrarSaldo()
//                 jugarJuego()
//                 break
//         case 3: salir = true
//             let saldoFinal : string = `Tu saldo final luego de jugar es de ${this.saldo}`
//             fs.writeFileSync(`saldoFinalUsuario.txt`,saldoFinal)
//             console.log(`Muchas gracias por jugar ${this.nombre}. Tu saldo final es de ${this.saldo} ¡Hasta la proxima!`)
//         break
//         default : console.log(`No esta disponible esa opcion. Te volvemos a mostrar las opciones para que vuelvas a elegir.`)
//         jugarJuego()
//         break
//     }
//     }
// }
// }
// }




    // mostrarMenu() {

    // let mostrarMenu = console.log("---MENÚ DE OPCIONES---")
    //                   console.log("1. Mostrar menu de juegos")
    //                   console.log("2. Salir del casino")

    // let preguntarUsuario = rs.questionInt("Ingresa la opcion que desees: ")

    // switch(preguntarUsuario) {
    //     case 1: jugarJuego()
    // }


    // }

















    // public pedirEdad(){
    // try {
    //     this.edad = rs.questionInt("Ingresa tu edad: ");
    //     if (this.edad < 18) {
    //         throw new Error("Sos menor de edad, las apuestas están prohibidas para ti");
    //     }
    // } catch (error) {
    //     console.log(error.message); 
    // } if( this.edad >= 18){
    //     this.mostrarSaldo()
    // }
    // }  