"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = new Date();
        this.dni = dni;
    }
    get Nombre() {
        return this.nombre;
    }
    get Apellido() {
        return this.apellido;
    }
    get Nacimiento() {
        return this.nacimiento;
    }
    set Nombre(v) {
        this.nombre = v;
    }
    set Apellido(v) {
        this.apellido = v;
    }
    set Nacimiento(v) {
        this.nacimiento = v;
    }
    get Dni() {
        return this.dni;
    }
    set Dni(v) {
        this.dni = v;
    }
    calcularEdad() {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        let mes = hoy.getMonth() - this.nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}
exports.Persona = Persona;
