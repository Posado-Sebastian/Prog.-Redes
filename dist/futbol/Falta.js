"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falta = void 0;
class Falta {
    constructor(jugador, minuto) {
        this.jugador = jugador;
        this.minuto = minuto;
    }
    get Jugador() {
        return this.jugador;
    }
    set Jugador(v) {
        this.jugador = v;
    }
    get Minuto() {
        return this.minuto;
    }
    set Minuto(v) {
        this.minuto = v;
    }
}
exports.Falta = Falta;
