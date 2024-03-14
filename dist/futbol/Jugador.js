"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = exports.Posicion = exports.Provincia = void 0;
const Persona_1 = require("./Persona");
var Provincia;
(function (Provincia) {
    Provincia["Buenos_Aires"] = "Buenos Aires";
    Provincia["Catamarca"] = "Catamarca";
    Provincia["Chaco"] = "Chaco";
    Provincia["Chubut"] = "Chubut";
    Provincia["C\u00F3rdoba"] = "C\u00F3rdoba";
    Provincia["Corrientes"] = "Corrientes";
    Provincia["Entre_R\u00EDos"] = "Entre R\u00EDos";
    Provincia["Formosa"] = "Formosa";
    Provincia["Jujuy"] = "Jujuy";
    Provincia["La_Pampa"] = "La Pampa";
    Provincia["La_Rioja"] = "La Rioja";
    Provincia["Mendoza"] = "Mendoza";
    Provincia["Misiones"] = "Misiones";
    Provincia["Neuqu\u00E9n"] = "Neuqu\u00E9n";
    Provincia["R\u00EDo_Negro"] = "R\u00EDo Negro";
    Provincia["Salta"] = "Salta";
    Provincia["San_Juan"] = "San Juan";
    Provincia["San_Luis"] = "San Luis";
    Provincia["Santa_Cruz"] = "Santa Cruz";
    Provincia["Santa_Fe"] = "Santa Fe";
    Provincia["Santiago_del_Estero"] = "Santiago del Estero";
    Provincia["Tierra_del_Fuego"] = "Tierra del Fuego";
    Provincia["Tucum\u00E1n"] = "Tucum\u00E1n";
})(Provincia || (exports.Provincia = Provincia = {}));
var Posicion;
(function (Posicion) {
    Posicion[Posicion["DELANTERO"] = 0] = "DELANTERO";
    Posicion[Posicion["MEDIOCAMPISTA"] = 1] = "MEDIOCAMPISTA";
    Posicion[Posicion["DEFENSOR"] = 2] = "DEFENSOR";
    Posicion[Posicion["ARQUERO"] = 3] = "ARQUERO";
})(Posicion || (exports.Posicion = Posicion = {}));
class Jugador extends Persona_1.Persona {
    constructor(nombre, apellido, dni, provincia, posicion, clubActual, nroCamiseta) {
        super(nombre, apellido, dni);
        this.provincia = provincia;
        this.posicion = posicion;
        this.clubActual = clubActual;
        this.historialEquipos = new Map();
        this.nroCamiseta = nroCamiseta;
    }
    get Provincia() {
        return this.provincia;
    }
    set Provincia(value) {
        this.provincia = value;
    }
    get Posicion() {
        return this.posicion;
    }
    set Posicion(value) {
        this.posicion = value;
    }
    get ClubActual() {
        return this.clubActual;
    }
    set ClubActual(value) {
        this.clubActual = value;
    }
    get HistorialEquipos() {
        return this.historialEquipos;
    }
    set HistorialEquipos(value) {
        this.historialEquipos = value;
    }
    get NroCamiseta() {
        return this.nroCamiseta;
    }
    set NroCamiseta(value) {
        this.nroCamiseta = value;
    }
}
exports.Jugador = Jugador;
