"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
var Tipo;
(function (Tipo) {
    Tipo[Tipo["ENTRADA"] = 0] = "ENTRADA";
    Tipo[Tipo["PLATO PRINCIPAL"] = 1] = "PLATO PRINCIPAL";
    Tipo[Tipo["POSTRE"] = 2] = "POSTRE";
})(Tipo || (Tipo = {}));
var Plato = /** @class */ (function () {
    function Plato(nombre, descripcion, precio, chef, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.chef = chef;
        this.tipo = tipo;
    }
    Object.defineProperty(Plato.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (v) {
            this.nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plato.prototype, "Descripcion", {
        get: function () {
            return this.descripcion;
        },
        set: function (v) {
            this.descripcion = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plato.prototype, "Precio", {
        get: function () {
            return this.precio;
        },
        set: function (v) {
            this.precio = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plato.prototype, "Chef", {
        get: function () {
            return this.chef;
        },
        set: function (v) {
            this.chef = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plato.prototype, "Tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (v) {
            this.tipo = v;
        },
        enumerable: false,
        configurable: true
    });
    return Plato;
}());
exports.Plato = Plato;
