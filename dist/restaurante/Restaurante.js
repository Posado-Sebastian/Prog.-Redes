"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
class Restaurante {
    constructor(nombre, platos, chefs) {
        this.nombre = nombre;
        this.platos = platos;
        this.chefs = chefs;
    }
    set Nombre(v) {
        this.nombre = v;
    }
    set Platos(v) {
        this.platos = v;
    }
    set Chefs(v) {
        this.chefs = v;
    }
    get Nombre() {
        return this.nombre;
    }
    get Platos() {
        return this.platos;
    }
    getChefs() {
        return this.chefs;
    }
    checkPlato(plato) {
        if (this.chefs.has(plato.Chef) === false || this.platos.has(plato) === true) {
            throw (new Error("El plato no se encuentra en el menu"));
        }
    }
    checkChef(chef) {
        if (chef.getEdad() < 18 || chef.Experiencia <= 1 || this.chefs.has(chef) === true) {
            throw (new Error("El chef no cumple con los requisitos para ser contratado"));
        }
    }
    agregarChef(chef) {
        try {
            this.checkChef(chef);
            this.chefs.add(chef);
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    agregarPlato(plato) {
        try {
            this.checkPlato(plato);
            this.platos.add(plato);
            return true;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
}
exports.Restaurante = Restaurante;
