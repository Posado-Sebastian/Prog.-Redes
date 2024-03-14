"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = new Set();
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(v) {
        this.nombre = v;
    }
    get Jugadores() {
        return this.jugadores;
    }
    set Jugadores(v) {
        this.jugadores = v;
    }
    contratar(jugador) {
        try {
            jugador.verificarJugador();
            this.jugadores.add(jugador);
        }
        catch (e) {
            console.log(e);
        }
    }
    verificarClub(jugador) {
        if (jugador.ClubActual == this && jugador.calcularEdad() > 35) {
            throw new Error("El jugador no tiene la edad permitida para renovar su contrato");
        }
        else if (jugador.ClubActual != this && jugador.calcularEdad() > 35) {
            throw new Error("El jugador no esta en el club para renovar su contrato");
        }
        else {
            throw new Error("El jugador no tiene la edad permitida ni esta en el club para renovar su contrato");
        }
    }
    renovarContrato(Jugador) {
        try {
            this.verificarClub(Jugador);
            Jugador.verificarJugador();
            this.jugadores.add(Jugador);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.Equipo = Equipo;
