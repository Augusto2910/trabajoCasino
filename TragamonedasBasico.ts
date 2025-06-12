import { IJugar } from "./IJugar"
import { Tragamonedas } from "./Tragamonedas"
import { Usuario } from "./Usuario"
import * as rs from "readline-sync"

export class TragamonedasBasico extends Tragamonedas implements IJugar{
    constructor(usuario: Usuario) {
        super("Tragamonedas Básico", usuario); // Envía el nombre y usuario
        this.montoMaximo = 1500;
        this.mostrarBienvenida(usuario.nombre); // Llama a la bienvenida
    }
// Añado este método para cumplir con la herencia de BienvenidaJuego    
public jugar(): void {
    this.apostar();
}
 apostar() {

    let montoApuesta = rs.questionInt("Ingrese el monto de apuesta(Minimo $100 - Maximo $1500): ")

    if (montoApuesta >= 100 && montoApuesta <= this.montoMaximo && montoApuesta < this.usuario.getSaldo()) {
    let girar = rs.question(`Ingrese "girar" para empezar a jugar: `).toLowerCase()

    if (girar === "girar") {
         let tirarTragamoneda = (simbol:string[]) => {
        return simbol[Math.floor(Math.random() * this.simbolos.length)]; //math floor: redondea numero decimal
                                                                         //random: genera numero del 0 al 1
                                                                         // * length: multiplico el numero por longitud del array
   }
        
let resultado =   [tirarTragamoneda(this.simbolos),  //genero 3 veces un simbolo en un array y lo guardo en resultado
                    tirarTragamoneda(this.simbolos),
                    tirarTragamoneda(this.simbolos)
                    ]
    
    console.log(resultado.join("/"))  //muestro el resultado con join para que quede como string y no como array    

    if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) { //comparo los simbolos segun las posiciones 
        console.log("Ganaste")
              this.usuario.sumarSaldo(montoApuesta)
    } else {
        console.log("Perdiste")
        this.usuario.restarSaldo(montoApuesta)
    }
    } else {
        console.log("Tu giro no se hizo correctamente.")
    }
} else {
    console.log("El valor minimo de apuesta es 100 y el maximo de apuesta es de $1500. Si deseas apostar un valor mayor, ingresa al Tragamonedas Extremo (Opcion 4)")
}
 }
}