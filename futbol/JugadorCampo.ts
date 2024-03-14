import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
import { Provincia, Posicion } from "./Jugador";
export class JugadorCampo extends Jugador{
    private goles: number;
    private intentosAlArco: number;
    private asistencias: number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number, provincia: Provincia, posicion: Posicion, clubActual: Equipo, historialEquipos: Set<Equipo>, nroCamiseta: Number, goles: number, intentosAlArco: number, asistencias: number){
        super(nombre, apellido, nacimiento, dni, provincia, posicion, clubActual, historialEquipos, nroCamiseta);
        this.goles=goles;
        this.intentosAlArco=intentosAlArco;
        this.asistencias=asistencias;
    }
    get Goles(): number{
        return this.goles;
    }
    set Goles(v: number) {
        this.goles = v;
    }
    get IntentosAlArco(): number{
        return this.intentosAlArco;
    }
    set IntentosAlArco(v: number) {
        this.intentosAlArco = v;
    }
    get Asistencias(): number{
        return this.asistencias;
    }
    set Asistencias(v: number) {
        this.asistencias = v;
    }
    porcentajeGolesConvertidos(): number{
        return 100/this.intentosAlArco*this.goles;
    }
    verificarJugador(): void{
        if(this.porcentajeGolesConvertidos()<=30 || this.asistencias<=10){
            throw new Error("El jugador de campo no es apto para jugar");
        }
    }
    actualizarDatos(n1: number, n2: number, n3: number) {
        this.goles=n1;
        this.intentosAlArco=n2;
        this.asistencias=n3;
    }
}