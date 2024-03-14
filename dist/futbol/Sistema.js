"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
const Jugador_1 = require("./Jugador");
var Tarjeta;
(function (Tarjeta) {
    Tarjeta[Tarjeta["AMARILLA"] = 0] = "AMARILLA";
    Tarjeta[Tarjeta["ROJA"] = 1] = "ROJA";
    Tarjeta[Tarjeta["NINGUNA"] = 2] = "NINGUNA";
})(Tarjeta || (Tarjeta = {}));
class Sistema {
    constructor() {
        this.equipos = new Set();
        this.partidos = new Set();
        this.jugadores = new Set();
    }
    get Equipos() {
        return this.equipos;
    }
    set Equipos(v) {
        this.equipos = v;
    }
    get Partidos() {
        return this.partidos;
    }
    set Partidos(v) {
        this.partidos = v;
    }
    get Jugadores() {
        return this.jugadores;
    }
    set Jugadores(v) {
        this.jugadores = v;
    }
    actualizarJugador(jugador, partido) {
        for (let jugador2 of this.Jugadores) {
            if (jugador2.Posicion == Jugador_1.Posicion.ARQUERO && jugador == jugador2) {
                jugador2.actualizarDatos(partido.cantGolesNoAtajados(jugador2), partido.cantJugadasEnArco(jugador2));
            }
            else if (jugador2.Posicion != Jugador_1.Posicion.ARQUERO && jugador == jugador2) {
                jugador2.actualizarDatos(partido.cantGolesNoAtajados(jugador2), partido.cantJugadasEnArco(jugador2), partido.cantAsistencias(jugador2));
            }
        }
    }
    jugadoresSuspendidos() {
        let jugadoresSuspendidos = new Set();
        for (let partido of this.Partidos) {
            if (partido.Fecha.getFullYear() == new Date().getFullYear()) {
                for (let jugador of partido.JugadoresClub1.keys()) {
                    if (partido.JugadoresClub1.get(jugador) == Tarjeta.ROJA) {
                        jugadoresSuspendidos.add(jugador);
                    }
                }
                for (let jugador of partido.JugadoresClub2.keys()) {
                    if (partido.JugadoresClub2.get(jugador) == Tarjeta.ROJA) {
                        jugadoresSuspendidos.add(jugador);
                    }
                }
            }
        }
        return jugadoresSuspendidos;
    }
    agregarPartido(partido) {
        this.Partidos.add(partido);
        partido.JugadoresClub1.forEach((tarjeta, jugador) => {
            this.actualizarJugador(jugador, partido);
        });
        partido.JugadoresClub2.forEach((tarjeta, jugador) => {
            this.actualizarJugador(jugador, partido);
        });
    }
}
exports.Sistema = Sistema;
