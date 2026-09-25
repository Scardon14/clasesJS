export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = String(nombre);
    this.nivel = Number(nivel);
  };
  informacion(){
    console.log(
      `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`
    );
  };
}
const jugador1 = new Jugador("Tara", 6);
