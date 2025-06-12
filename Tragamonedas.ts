import { IJugar } from "./IJugar";
import { Usuario } from "./Usuario";
import { BienvenidaJuego } from "./BienvenidaJuego";

export abstract class Tragamonedas extends BienvenidaJuego {
       protected simbolos : string[] = ["🍎","🍊","🍒","🍒","🍒","🍒"]
       protected usuario : Usuario
       protected montoMinimo : number
       protected montoMaximo : number

       constructor(nombreJuego: string, usuario: Usuario) {
        super(nombreJuego); // Pasa el nombre del juego a BienvenidaJuego
        this.usuario = usuario;
    }
}