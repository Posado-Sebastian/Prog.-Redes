"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partido = void 0;
var Tarjeta;
(function (Tarjeta) {
    Tarjeta[Tarjeta["AMARILLA"] = 0] = "AMARILLA";
    Tarjeta[Tarjeta["ROJA"] = 1] = "ROJA";
    Tarjeta[Tarjeta["NINGUNA"] = 2] = "NINGUNA";
})(Tarjeta || (Tarjeta = {}));
class Partido {
    constructor(club1, club2, jugadoresClub1, jugadoresClub2, duracion) {
        this.club1 = club1;
        this.club2 = club2;
        this.jugadoresClub1 = jugadoresClub1;
        this.jugadoresClub2 = jugadoresClub2;
        this.duracion = duracion;
        this.fecha = new Date();
        this.jugadas = new Set();
        this.faltas = new Set();
    }
    get Club1() {
        return this.club1;
    }
    set Club1(v) {
        this.club1 = v;
    }
    get Club2() {
        return this.club2;
    }
    set Club2(v) {
        this.club2 = v;
    }
    get Jugadas() {
        return this.jugadas;
    }
    set Jugadas(v) {
        this.jugadas = v;
    }
    get JugadoresClub1() {
        return this.jugadoresClub1;
    }
    set JugadoresClub1(v) {
        this.jugadoresClub1 = v;
    }
    get JugadoresClub2() {
        return this.jugadoresClub2;
    }
    set JugadoresClub2(v) {
        this.jugadoresClub2 = v;
    }
    get Faltas() {
        return this.faltas;
    }
    set Faltas(v) {
        this.faltas = v;
    }
    get Duracion() {
        return this.duracion;
    }
    set Duracion(v) {
        this.duracion = v;
    }
    get Fecha() {
        return this.fecha;
    }
    set Fecha(v) {
        this.fecha = v;
    }
    cantGolesNoAtajados(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Gol && jugada.Arquero == jugador) {
                cant += 1;
            }
        }
        return cant;
    }
    cantIntentosAlArco(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Goleador == jugador) {
                cant += 1;
            }
        }
        return cant;
    }
    cantJugadasEnArco(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Arquero == jugador) {
                cant += 1;
            }
        }
        return cant;
    }
    porcentajeAtajadas(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Arquero == jugador && !jugada.Gol) {
                cant += 1;
            }
        }
        return 100 / this.cantJugadasEnArco(jugador) * cant;
    }
    cantGolesEncontra(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Gol && jugada.Arquero.ClubActual == jugada.Goleador.ClubActual && jugada.Goleador == jugador) {
                cant += 1;
            }
        }
        return cant;
    }
    porcentajeGolesConvertidos(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Goleador == jugador && jugada.Gol) {
                cant += 1;
            }
        }
        return 100 / this.cantIntentosAlArco(jugador) * cant;
    }
    cantGoles(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Goleador == jugador && jugada.Gol) {
                cant += 1;
            }
        }
        return cant;
    }
    cantAsistencias(jugador) {
        let cant = 0;
        for (let jugada of this.jugadas) {
            if (jugada.Asistencia == jugador && jugada.Gol) {
                cant += 1;
            }
        }
        return cant;
    }
    agregarFalta(falta) {
        this.faltas.add(falta);
        let jugador = falta.Jugador;
        if (this.jugadoresClub1.has(jugador)) {
            if (this.jugadoresClub1.get(jugador) == Tarjeta.NINGUNA) {
                this.jugadoresClub1.set(jugador, Tarjeta.AMARILLA);
            }
            else if (this.jugadoresClub1.get(jugador) == Tarjeta.AMARILLA) {
                this.jugadoresClub1.set(jugador, Tarjeta.ROJA);
            }
        }
        if (this.jugadoresClub2.has(jugador)) {
            if (this.jugadoresClub2.get(jugador) == Tarjeta.NINGUNA) {
                this.jugadoresClub2.set(jugador, Tarjeta.AMARILLA);
            }
            else if (this.jugadoresClub2.get(jugador) == Tarjeta.AMARILLA) {
                this.jugadoresClub2.set(jugador, Tarjeta.ROJA);
            }
        }
    }
}
exports.Partido = Partido;
