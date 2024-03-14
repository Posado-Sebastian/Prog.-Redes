import { Equipo } from "./Equipo";
import { Persona } from "./Persona";

export enum Provincia{
    Buenos_Aires = "Buenos Aires", Catamarca = "Catamarca", Chaco = "Chaco", Chubut = "Chubut", Córdoba = "Córdoba", Corrientes = "Corrientes", Entre_Ríos = "Entre Ríos"
    , Formosa = "Formosa", Jujuy = "Jujuy", La_Pampa = "La Pampa", La_Rioja = "La Rioja", Mendoza = "Mendoza", Misiones = "Misiones", Neuquén = "Neuquén", Río_Negro = "Río Negro"
    , Salta = "Salta", San_Juan = "San Juan", San_Luis = "San Luis", Santa_Cruz = "Santa Cruz", Santa_Fe = "Santa Fe", Santiago_del_Estero = "Santiago del Estero"
    , Tierra_del_Fuego = "Tierra del Fuego", Tucumán = "Tucumán"
}
export enum Posicion {
    DELANTERO, MEDIOCAMPISTA, DEFENSOR, ARQUERO
}
export abstract class Jugador extends Persona{
    private provincia: Provincia;
    private posicion: Posicion;
    private clubActual: Equipo;
    private historialEquipos: Set<Equipo>;
    private nroCamiseta: Number;

    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number, provincia: Provincia, posicion: Posicion, clubActual: Equipo, historialEquipos: Set<Equipo>, nroCamiseta: Number){
        super(nombre, apellido, nacimiento, dni);
        this.provincia=provincia;
        this.posicion=posicion;
        this.clubActual=clubActual;
        this.historialEquipos=historialEquipos;
        this.nroCamiseta=nroCamiseta;
    }    
    
 
    get Provincia(): Provincia {
        return this.provincia;
    }

    set Provincia(value: Provincia) {
        this.provincia = value;
    }

    get Posicion(): Posicion {
        return this.posicion;
    }

    set Posicion(value: Posicion) {
        this.posicion = value;
    }

    get ClubActual(): Equipo {
        return this.clubActual;
    }

    set ClubActual(value: Equipo) {
        this.clubActual = value;
    }

    get HistorialEquipos(): Set<Equipo> {
        return this.historialEquipos;
    }

    set HistorialEquipos(value: Set<Equipo>) {
        this.historialEquipos = value;
    }

    get NroCamiseta(): Number {
        return this.nroCamiseta;
    }

    set NroCamiseta(value: number) {
        this.nroCamiseta = value;
    }
    abstract verificarJugador(): void;
    abstract actualizarDatos(n1: number, n2: number, n3?: number): void;
}