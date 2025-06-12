import { Ruleta } from "./Ruleta"
import { Tragamonedas } from "./Tragamonedas"
import * as rs from "readline-sync"
import { TragamonedasBasico } from "./TragamonedasBasico"
import { TragamonedasExtremo } from "./TragamonedasExtremo"
import { JuegoDados } from "./JuegoDados"
import { Usuario } from "./Usuario"


export class fabricaJuegos {

     private usuario : Usuario

     constructor(usuario : Usuario) {
        this.usuario = usuario
     }

mostrarJuegos() {
    let listaJuegos =
                    console.log("Opcion 1: Ruleta") 
                    console.log("Opcion 2: Craps")
                    console.log("Opcion 3: Tragamonedas Basico")
                    console.log("Opcion 4: Tragamonedas Extremo")
}

jugar() {
    let elegir = rs.questionInt("Ingresa el numero del juego que desees: ")
    switch (elegir) {
        case 1 : 
            console.log("------INGRESANDO------") 
            console.log("¡Ingresaste a la ruleta!") 
            console.log("------¡SUERTE!------") 
            return new Ruleta(this.usuario)

        case 2 : 
            console.log("------INGRESANDO------")
            console.log("¡Ingresaste a Craps") 
            console.log("------¡SUERTE!------") 
            return new JuegoDados(this.usuario)

         case 3 :  
            console.log("------INGRESANDO------")
            console.log("¡Ingresaste al Tragamonedas Basico!") 
            console.log("------¡SUERTE!------") 
            return new TragamonedasBasico(this.usuario)

        case 4 : 
            console.log("------INGRESANDO------")
            console.log("¡Ingresaste al Tragamonedas Extremo!") 
            console.log("------¡SUERTE!------") 
            return new TragamonedasExtremo(this.usuario)

        
        
        default : return console.log(`No existe juego en la opcion ${elegir}`)
    }
}
}