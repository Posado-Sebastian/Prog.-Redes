import { Chef } from "./Chef";
import { Plato } from "./Plato";
import { Restaurante } from "./Restaurante";
let res: Restaurante = new Restaurante("Sebast Ian", new Set(), new Set());
let chef: Chef = new Chef("Sebastian", new Date("2005, 8, 31"),2);
let chef2: Chef = new Chef("Sebastian2", new Date("2005, 8, 31"),2);
let plato: Plato = new Plato("milanesa","milanesa grande", 25000, chef, 1);
if(res.agregarChef(chef) == true){
    console.log("El chef " + chef.Nombre + " fue agregado al equipo de " + res.Nombre);
}
if(res.agregarPlato(plato) == true){
    console.log("El plato " + plato.Nombre + " fue agregado al menu de " + res.Nombre);
}
if(res.Platos.has(plato)){
    console.log("yes1");
}
if(res.Chefs.has(chef)){
    console.log("yes2");
}

