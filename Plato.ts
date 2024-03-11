import { Chef } from "./Chef";
enum Tipo{
    "ENTRADA","PLATO PRINCIPAL", "POSTRE"
}
export class Plato{
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private chef: Chef;
    private tipo: Tipo;

    constructor(nombre: string, descripcion: string, precio: number, chef: Chef, tipo: Tipo){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.chef = chef;
        this.tipo = tipo;
    }
    get Nombre(){
        return this.nombre;
    }
    get Descripcion(){
        return this.descripcion;
    }
    get Precio(){
        return this.precio;
    }
    get Chef(){
        return this.chef;
    }
    get Tipo(){
        return this.tipo;
    }
    set Nombre(v: string) {
        this.nombre = v;
    }
    set Descripcion(v: string) {
        this.descripcion = v;
    }
    set Precio(v: number) {
        this.precio = v;
    }
    set Chef(v: Chef) {
        this.chef = v;
    }
    set Tipo(v: Tipo) {
        this.tipo = v;
    }
}