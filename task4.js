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
  subirNivel(){
    this.nivel++;
  };
}
const jugador1 = new Jugador("Grog", 4);
jugador1.informacion();
jugador1.subirNivel();
jugador1.informacion();
