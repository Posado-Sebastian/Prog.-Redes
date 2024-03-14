"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugada = void 0;
class Jugada {
    constructor(gol, goleador, asistencia, arquero) {
        this.gol = gol;
        this.goleador = goleador;
        this.asistencia = asistencia;
        this.arquero = arquero;
    }
    get Gol() {
        return this.gol;
    }
    set Gol(v) {
        this.gol = v;
    }
    get Goleador() {
        return this.goleador;
    }
    set Goleador(v) {
        this.goleador = v;
    }
    get Asistencia() {
        return this.asistencia;
    }
    set Asistencia(v) {
        this.asistencia = v;
    }
    get Arquero() {
        return this.arquero;
    }
    set Arquero(v) {
        this.arquero = v;
    }
    esGol() {
        return this.gol;
    }
    esGolEnContra() {
        if (this.gol && this.goleador.ClubActual == this.arquero.ClubActual) {
            return true;
        }
        return false;
    }
}
exports.Jugada = Jugada;
