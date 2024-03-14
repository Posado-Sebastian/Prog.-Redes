import { Jugador } from './Jugador';
export class Falta{
    private jugador: Jugador;
    private minuto: number;
    constructor(jugador: Jugador, minuto: number){
        this.jugador = jugador;
        this.minuto = minuto;
    }
    get Jugador(): Jugador{
        return this.jugador;
    }
    set Jugador(v: Jugador) {
        this.jugador = v;
    }
    get Minuto(): number{
        return this.minuto;
    }
    set Minuto(v: number) {
        this.minuto = v;
    }
}