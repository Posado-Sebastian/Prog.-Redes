"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
var Tipo;
(function (Tipo) {
    Tipo[Tipo["ENTRADA"] = 0] = "ENTRADA";
    Tipo[Tipo["PLATO PRINCIPAL"] = 1] = "PLATO PRINCIPAL";
    Tipo[Tipo["POSTRE"] = 2] = "POSTRE";
})(Tipo || (Tipo = {}));
class Plato {
    constructor(nombre, descripcion, precio, chef, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.chef = chef;
        this.tipo = tipo;
    }
    get Nombre() {
        return this.nombre;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get Precio() {
        return this.precio;
    }
    get Chef() {
        return this.chef;
    }
    get Tipo() {
        return this.tipo;
    }
    set Nombre(v) {
        this.nombre = v;
    }
    set Descripcion(v) {
        this.descripcion = v;
    }
    set Precio(v) {
        this.precio = v;
    }
    set Chef(v) {
        this.chef = v;
    }
    set Tipo(v) {
        this.tipo = v;
    }
}
exports.Plato = Plato;
