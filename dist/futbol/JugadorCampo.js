"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorCampo = void 0;
const Jugador_1 = require("./Jugador");
class JugadorCampo extends Jugador_1.Jugador {
    constructor(nombre, apellido, dni, provincia, posicion, clubActual, nroCamiseta) {
        super(nombre, apellido, dni, provincia, posicion, clubActual, nroCamiseta);
        this.goles = 0;
        this.intentosAlArco = 0;
        this.asistencias = 0;
    }
    get Goles() {
        return this.goles;
    }
    set Goles(v) {
        this.goles = v;
    }
    get IntentosAlArco() {
        return this.intentosAlArco;
    }
    set IntentosAlArco(v) {
        this.intentosAlArco = v;
    }
    get Asistencias() {
        return this.asistencias;
    }
    set Asistencias(v) {
        this.asistencias = v;
    }
    porcentajeGolesConvertidos() {
        return 100 / this.intentosAlArco * this.goles;
    }
    verificarJugador() {
        if (this.porcentajeGolesConvertidos() <= 30 || this.asistencias <= 10) {
            throw new Error("El jugador de campo no es apto para jugar");
        }
    }
    actualizarDatos(n1, n2, n3) {
        this.goles = this.goles + n1;
        this.intentosAlArco += n2;
        this.asistencias += n3;
    }
}
exports.JugadorCampo = JugadorCampo;
