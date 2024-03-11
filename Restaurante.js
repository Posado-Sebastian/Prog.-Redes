"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurante = void 0;
var Restaurante = /** @class */ (function () {
    function Restaurante(nombre, platos, chefs) {
        this.nombre = nombre;
        this.platos = platos;
        this.chefs = chefs;
    }
    Object.defineProperty(Restaurante.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (v) {
            this.nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurante.prototype, "Platos", {
        get: function () {
            return this.platos;
        },
        set: function (v) {
            this.platos = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurante.prototype, "Chefs", {
        get: function () {
            return this.chefs;
        },
        set: function (v) {
            this.chefs = v;
        },
        enumerable: false,
        configurable: true
    });
    Restaurante.prototype.agregarChef = function (chef) {
        if (chef.getEdad() >= 18 && chef.Experiencia > 1 && this.chefs.has(chef) === false) {
            this.chefs.add(chef);
        }
    };
    Restaurante.prototype.agregarPlato = function (plato) {
        if (this.chefs.has(plato.Chef) == true && this.platos.has(plato) == false) {
            this.platos.add(plato);
        }
    };
    return Restaurante;
}());
exports.Restaurante = Restaurante;
