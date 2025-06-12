// BienvenidaJuego.ts
export abstract class BienvenidaJuego {
    protected nombreJuego: string;

    constructor(nombreJuego: string) {
        this.nombreJuego = nombreJuego;
    }

    public mostrarBienvenida(nombreUsuario: string): void {
        console.log(`\n¡Bienvenido/a ${nombreUsuario} al juego de ${this.nombreJuego}!`);
        console.log("¡Buena suerte!\n");
    }

    // Método abstracto que cada juego debe implementar
    public abstract jugar(): void;
}
