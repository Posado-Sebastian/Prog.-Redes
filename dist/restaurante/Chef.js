"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
class Chef {
    constructor(nombre, nacimiento, experiencia) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.experiencia = experiencia;
    }
    getEdad() {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        let mes = hoy.getMonth() - this.nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    get Experiencia() {
        return this.experiencia;
    }
    get Nombre() {
        return this.nombre;
    }
    get Nacimiento() {
        return this.nacimiento;
    }
    set Experiencia(v) {
        this.Experiencia = v;
    }
    set Nombre(v) {
        this.Nombre = v;
    }
    set Nacimiento(v) {
        this.Nacimiento = v;
    }
}
exports.Chef = Chef;
