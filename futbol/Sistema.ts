import { Equipo } from "./Equipo";
import { Jugador, Posicion } from "./Jugador";
import { Jugada } from "./Jugada";
import { Partido } from "./Partido";
import { Persona } from "./Persona";
import { JugadorCampo } from "./JugadorCampo";
import { Arquero } from "./Arquero";
export class Sistema{
    private equipos: Set<Equipo>;
    private partidos: Set<Partido>;
    private jugadores: Set<Jugador>;

    constructor(){
        this.equipos = new Set<Equipo>();
        this.partidos = new Set<Partido>();
        this.jugadores = new Set<Jugador>();
    }

    get Equipos(): Set<Equipo>{
        return this.equipos;
    }
    set Equipos(v: Set<Equipo>) {
        this.equipos = v;
    }
    get Partidos(): Set<Partido>{
        return this.partidos;
    }
    set Partidos(v: Set<Partido>) {
        this.partidos = v;
    }
    get Jugadores(): Set<Jugador>{
        return this.jugadores;
    }
    set Jugadores(v: Set<Jugador>) {
        this.jugadores = v;
    }
    actualizarJugador(jugador: Jugador, partido: Partido): void{
        for(let jugador2 of this.Jugadores){
            if(jugador2.Posicion==Posicion.ARQUERO && jugador==jugador2){
                jugador2.actualizarDatos(partido.cantGolesNoAtajados(jugador2), partido.cantJugadasEnArco(jugador2));
            }else if(jugador2.Posicion!=Posicion.ARQUERO && jugador==jugador2){
                jugador2.actualizarDatos(partido.cantGolesNoAtajados(jugador2), partido.cantJugadasEnArco(jugador2), partido.cantAsistencias(jugador2));
            }
        }
    }
    agregarPartido(partido: Partido): void{
        this.Partidos.add(partido);
        for(let jugador of partido.JugadoresClub1){
            this.actualizarJugador(jugador, partido);
        }
        for(let jugador of partido.JugadoresClub2){
            this.actualizarJugador(jugador, partido);
        }
    }

}