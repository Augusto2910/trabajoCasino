import { Usuario } from "./Usuario";
import { Ruleta } from "./Ruleta";
import { Tragamonedas } from "./Tragamonedas";
import { fabricaJuegos } from "./fabricaJuegos";
import { Casino } from "./Casino";

// let usuario = new Usuario()
let casino = new Casino()

casino.EmpezarAJugarCasino()

// usuario.pedirNombre()
// usuario.pedirEdad()

// let ruleta = new Ruleta()

// ruleta.apostar()

// let jugarJuego = () => {
// let juegos = new fabricaJuegos() //creo la fabrica de juegos en la variable "juegos"

// juegos.mostrarJuegos() //muestro los juegos disponibles

// let elegirJuego = juegos.jugar() //en "jugar" guardo el juego que elija el usuario


// if (elegirJuego) {  //si la opcion elegida es correcta...
//     elegirJuego.apostar() //ejecuta la funcion de apostar
// }
// }

// jugarJuego() 

// let tragamonedas = new TragamonedasBasico()

// tragamonedas.jugar()