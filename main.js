"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chef_1 = require("./Chef");
var Plato_1 = require("./Plato");
var Restaurante_1 = require("./Restaurante");
var res = new Restaurante_1.Restaurante("Sebast Ian", new Set(), new Set());
var chef = new Chef_1.Chef("Sebastian", new Date("2005, 8, 31"), 2);
var plato = new Plato_1.Plato("milanesa", "milanesa grande", 25000, chef, 1);
res.agregarChef(chef);
res.agregarPlato(plato);
if (res.Chefs.has(chef) == true) {
    console.log("El chef fue agregado correctamente");
}
