"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chef = void 0;
var Chef = /** @class */ (function () {
    function Chef(nombre, nacimiento, experiencia) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.experiencia = experiencia;
    }
    Chef.prototype.getEdad = function () {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        var mes = hoy.getMonth() - this.nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())) {
            edad--;
        }
        return edad;
    };
    Object.defineProperty(Chef.prototype, "Experiencia", {
        get: function () {
            return this.experiencia;
        },
        set: function (v) {
            this.Experiencia = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chef.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (v) {
            this.Nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chef.prototype, "Nacimiento", {
        get: function () {
            return this.nacimiento;
        },
        set: function (v) {
            this.Nacimiento = v;
        },
        enumerable: false,
        configurable: true
    });
    return Chef;
}());
exports.Chef = Chef;
