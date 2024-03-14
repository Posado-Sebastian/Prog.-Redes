"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Jugador_1 = require("./Jugador");
const Jugador_2 = require("./Jugador");
class Arquero extends Jugador_1.Jugador {
    constructor(nombre, apellido, dni, provincia, clubActual, nroCamiseta) {
        super(nombre, apellido, dni, provincia, Jugador_2.Posicion.ARQUERO, clubActual, nroCamiseta);
        this.atajadas = 0;
        this.golesRecibidos = 0;
    }
    get Atajadas() {
        return this.atajadas;
    }
    set Atajadas(v) {
        this.atajadas = v;
    }
    get GolesRecibidos() {
        return this.golesRecibidos;
    }
    set GolesRecibidos(v) {
        this.golesRecibidos = v;
    }
    porcentajeAtajadas() {
        return 100 / this.golesRecibidos * this.atajadas;
    }
    verificarJugador() {
        if (this.porcentajeAtajadas() <= 60 || this.golesRecibidos >= 10) {
            throw new Error("El arquero no es apto para jugar");
        }
    }
    actualizarDatos(n1, n2, n3) {
        this.atajadas += n1;
        this.golesRecibidos += n2;
    }
}
exports.Arquero = Arquero;
