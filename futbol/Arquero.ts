import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
import { Provincia, Posicion } from "./Jugador";

export class Arquero extends Jugador{
    private atajadas: number;
    private golesRecibidos: number;
    constructor(nombre: string, apellido: string, dni: number, provincia: Provincia, clubActual: Equipo, nroCamiseta: Number){
        super(nombre, apellido, dni, provincia, Posicion.ARQUERO, clubActual, nroCamiseta);
        this.atajadas=0;
        this.golesRecibidos=0;
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
        this.atajadas+=n1;
        this.golesRecibidos+=n2;
    }
}