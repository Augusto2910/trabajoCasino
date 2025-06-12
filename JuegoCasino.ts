import * as readline from 'readline';
import { Usuario } from "./Usuario";

export abstract class JuegoCasino {
  protected salir: boolean = false;

  constructor(
    protected nombre: string,
    protected usuario: Usuario
) {}

  abstract apostar(): Promise<void>;

  protected async mostrarMenuOpciones(): Promise<void> {
    console.log(`\n¿Qué deseas hacer ahora?`);
    console.log("1. Volver al menú de juegos");
    console.log("2. Salir del casino");

    const opcion = await this.preguntar("Elige una opción: ");

    switch (opcion) {
      case "1":
        this.salir = false;
        break;
      case "2":
        this.salir = true;
        break;
      default:
        console.log("Opción no válida. Volviendo al menú por defecto.");
        this.salir = false;
        break;
    }
  }

  protected preguntar(pregunta: string): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question(pregunta, (respuesta) => {
        rl.close();
        resolve(respuesta);
      });
    });
  }

  public deseaSalir(): boolean {
    return this.salir;
  }
}
