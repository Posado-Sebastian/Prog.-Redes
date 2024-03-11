import { Chef } from "./Chef";
import { Plato } from "./Plato";
export class Restaurante{
    private nombre: string;
    private platos: Set<Plato>;
    private chefs: Set<Chef>;

    constructor(nombre: string, platos: Set<Plato>, chefs: Set<Chef>){
        this.nombre = nombre;
        this.platos = platos;
        this.chefs = chefs;
    }
    set Nombre(v: string) {
        this.nombre = v;
    }
    set Platos(v: Set<Plato>) {
        this.platos = v;
    }
    set Chefs(v: Set<Chef>) {
        this.chefs = v;
    }
    get Nombre(): string{
        return this.nombre;
    }
    get Platos(): Set<Plato>{
        return this.platos;
    }
    getChefs(): Set<Chef>{
        return this.chefs;
    }
    checkPlato(plato: Plato){
        if(this.chefs.has(plato.Chef) === false || this.platos.has(plato) === true){
            throw (new Error("El plato no se encuentra en el menu"));
        }
    }
    checkChef(chef: Chef){
        if(chef.getEdad() < 18 || chef.Experiencia <= 1 || this.chefs.has(chef) === true){
            throw (new Error("El chef no cumple con los requisitos para ser contratado"));
        }
    }
    agregarChef(chef: Chef): boolean{
        try{
            this.checkChef(chef);
            this.chefs.add(chef);
            return true;
        }catch(e){
            console.error(e);
            return false;
        }
    }
    agregarPlato(plato: Plato): boolean{
        try{
            this.checkPlato(plato);
            this.platos.add(plato);
            return true;
        }catch(e){
            console.error(e);
            return false;
        }
    }
}