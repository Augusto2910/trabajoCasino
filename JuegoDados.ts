import * as readlineSync from "readline-sync";
import * as fs from 'fs';
import { Usuario } from "./Usuario";
import { IJugar } from "./IJugar";
import { BienvenidaJuego } from "./BienvenidaJuego";

export class JuegoDados extends BienvenidaJuego implements IJugar {
    private apuestaMinima: number = 500;
    private usuario: Usuario;

    constructor(usuario: Usuario) {
        super("Craps"); // Inicializa el nombre del juego
        this.usuario = usuario;
    }

    // Implementación del método abstracto de BienvenidaJuego
    public jugar(): void {
        this.apostar(); 
    }

    public apostar(): void {
        this.mostrarBienvenida(this.usuario.nombre);

        const apuesta = readlineSync.questionInt("Ingrese el monto de su apuesta (Minimo $500): ");

        if (apuesta < this.apuestaMinima) {
            console.log(`La apuesta minima es ${this.apuestaMinima}. Apuesta no valida.`);
            return;
        }


    const tipoApuesta = readlineSync.question("Queres apostar a 'numero' o 'par/impar'? ").toLowerCase();

    let valorApuesta: number | "par" | "impar";
    if (tipoApuesta === "numero") {
      valorApuesta = readlineSync.questionInt("Elegí un número del 2 al 12: ");
    } else if (tipoApuesta === "par" || tipoApuesta === "impar") {
      valorApuesta = tipoApuesta;
    } else {
      console.log("Opción no válida. Se asumirá 'par' como apuesta.");
      valorApuesta = "par";
    }

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    console.log(`Resultado de los dados: ${dado1} + ${dado2} = ${suma}`);

    if (tipoApuesta === "numero") {
      if (valorApuesta === suma) {
        console.log(`¡Adivinaste la suma exacta!`);
        this.usuario.sumarSaldo(apuesta);
      } else {
        console.log("No acertaste el número. Perdiste la apuesta.");
        this.usuario.restarSaldo(apuesta);
      }
    } else {
      const esPar = suma % 2 === 0;
      if ((valorApuesta === "par" && esPar) || (valorApuesta === "impar" && !esPar)) {
        console.log(`¡Adivinaste par/impar!`);
        this.usuario.sumarSaldo(apuesta);
      } else {
        console.log("No acertaste par/impar. Perdiste la apuesta.");
        this.usuario.restarSaldo(apuesta);
      }
    } 

    console.log("Gracias por jugar");
  }
}