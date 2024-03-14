import { Equipo } from './Equipo';
import { Jugada } from './Jugada';
import { Jugador } from './Jugador';

export class Partido{
    private club1: Equipo;
    private club2: Equipo;
    private jugadas: Set<Jugada>;
    private jugadoresClub1: Set<Jugador>;
    private jugadoresClub2: Set<Jugador>;
    private duracion: number;
    private fecha: Date;
    constructor(club1: Equipo, club2: Equipo, jugadoresClub1: Set<Jugador>, jugadoresClub2: Set<Jugador>, duracion: number, fecha: Date, jugadas: Set<Jugada>){
        this.club1 = club1;
        this.club2 = club2;
        this.jugadoresClub1 = jugadoresClub1;
        this.jugadoresClub2 = jugadoresClub2;
        this.duracion = duracion;
        this.fecha = fecha;
        this.jugadas = jugadas;
    }
    get Club1(): Equipo{
        return this.club1;
    }
    set Club1(v: Equipo) {
        this.club1 = v;
    }
    get Club2(): Equipo{
        return this.club2;
    }
    set Club2(v: Equipo) {
        this.club2 = v;
    }
    get Jugadas(): Set<Jugada>{
        return this.jugadas;
    }
    set Jugadas(v: Set<Jugada>) {
        this.jugadas = v;
    }
    get JugadoresClub1(): Set<Jugador>{
        return this.jugadoresClub1;
    }
    set JugadoresClub1(v: Set<Jugador>) {
        this.jugadoresClub1 = v;
    }
    get JugadoresClub2(): Set<Jugador>{
        return this.jugadoresClub2;
    }
    set JugadoresClub2(v: Set<Jugador>) {
        this.jugadoresClub2 = v;
    }
    get Duracion(): number{
        return this.duracion;
    }
    set Duracion(v: number) {
        this.duracion = v;
    }
    get Fecha(): Date{
        return this.fecha;
    }
    set Fecha(v: Date) {
        this.fecha = v;
    }
    cantGolesNoAtajados(jugador: Jugador): number{
        let cant:number = 0;
        for (let jugada of this.jugadas){
            if(jugada.Gol && jugada.Arquero == jugador){
                cant+=1;
            }
        }
        return cant;
    }
    cantIntentosAlArco(jugador: Jugador): number{
        let cant:number = 0;
        for (let jugada of this.jugadas){
            if(jugada.Goleador == jugador){
                cant+=1;
            }
        }
        return cant;
    }
    cantJugadasEnArco(jugador: Jugador): number{
        let cant:number = 0;
        for (let jugada of this.jugadas){
            if(jugada.Arquero == jugador){
                cant+=1;
            }
        }
        return cant;
    }
    porcentajeAtajadas(jugador: Jugador): number{
        let cant:number = 0;
        for(let jugada of this.jugadas){
            if(jugada.Arquero == jugador && !jugada.Gol){
                cant+=1;
            }
        }
        return 100/this.cantJugadasEnArco(jugador)*cant;
    }
    cantGolesEncontra(jugador: Jugador): number{
        let cant:number = 0;
        for(let jugada of this.jugadas){
            if(jugada.Gol && jugada.Arquero.ClubActual == jugada.Goleador.ClubActual && jugada.Goleador == jugador){
                cant+=1;
            }
        }
        return cant;
    }
    porcentajeGolesConvertidos(jugador: Jugador): number{
        let cant:number = 0;
        for(let jugada of this.jugadas){
            if(jugada.Goleador == jugador && jugada.Gol){
                cant+=1;
            }
        }
        return 100/this.cantIntentosAlArco(jugador)*cant;
    }
    cantGoles(jugador: Jugador): number{
        let cant:number = 0;
        for(let jugada of this.jugadas){
            if(jugada.Goleador == jugador && jugada.Gol){
                cant+=1;
            }
        }
        return cant;
    }
    cantAsistencias(jugador: Jugador): number{
        let cant:number = 0;
        for(let jugada of this.jugadas){
            if(jugada.Asistencia == jugador && jugada.Gol){
                cant+=1;
            }
        }
        return cant;
    }
}