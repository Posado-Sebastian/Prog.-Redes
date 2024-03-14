import { Arquero } from "./Arquero";
import { Jugador } from "./Jugador";
import { JugadorCampo } from "./JugadorCampo";
import { Equipo } from "./Equipo";
export class Jugada {
    private gol: boolean;
    private goleador: Jugador;
    private asistencia: Jugador;
    private arquero: Arquero;

    constructor(gol: boolean, goleador: Jugador, asistencia: Jugador, arquero: Arquero){
        this.gol = gol;
        this.goleador = goleador;
        this.asistencia = asistencia;
        this.arquero = arquero;
    }

    get Gol(): boolean{
        return this.gol;
    }
    set Gol(v: boolean) {
        this.gol = v;
    }
    get Goleador(): Jugador{
        return this.goleador;
    }
    set Goleador(v: Jugador) {
        this.goleador = v;
    }
    get Asistencia(): Jugador{
        return this.asistencia;
    }
    set Asistencia(v: Jugador) {
        this.asistencia = v;
    }
    get Arquero(): Arquero{
        return this.arquero;
    }
    set Arquero(v: Arquero) {
        this.arquero = v;
    }
    esGol(): boolean{
        return this.gol;
    }
    esGolEnContra(): boolean{
        if(this.gol && this.goleador.ClubActual == this.arquero.ClubActual){
            return true;
        }
        return false;
    }
}