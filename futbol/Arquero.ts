import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
import { Provincia, Posicion } from "./Jugador";

export class Arquero extends Jugador{
    private atajadas: number;
    private golesRecibidos: number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number, provincia: Provincia, clubActual: Equipo, historialEquipos: Set<Equipo>, nroCamiseta: Number, atajadas: number, golesRecibidos: number){
        super(nombre, apellido, nacimiento, dni, provincia, Posicion.ARQUERO, clubActual, historialEquipos, nroCamiseta);
        this.atajadas=atajadas;
        this.golesRecibidos=golesRecibidos;
    }
    get Atajadas(): number{
        return this.atajadas;
    }
    set Atajadas(v: number) {
        this.atajadas = v;
    }
    get GolesRecibidos(): number{
        return this.golesRecibidos;
    }
    set GolesRecibidos(v: number) {
        this.golesRecibidos = v;
    }
    porcentajeAtajadas(): number{
        return 100/this.golesRecibidos*this.atajadas;
    }
    verificarJugador(): void{
        if(this.porcentajeAtajadas()<=60 || this.golesRecibidos>=10){
            throw new Error("El arquero no es apto para jugar");
        }
    }
    actualizarDatos(n1: number, n2: number, n3: number) {
        this.atajadas=n1;
        this.golesRecibidos=n2;
    }
}