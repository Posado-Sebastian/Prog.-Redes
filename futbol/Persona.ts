export abstract class Persona{
    private nombre: string;
    private apellido: string;
    private nacimiento: Date;
    private dni : number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.dni = dni;
    }
    get Nombre(): string{
        return this.nombre;
    }
    get Apellido(): string{
        return this.apellido;
    }
    get Nacimiento(): Date{
        return this.nacimiento;
    }
    set Nombre(v: string) {
        this.nombre = v;
    }
    set Apellido(v: string) {
        this.apellido = v;
    }
    set Nacimiento(v: Date) {
        this.nacimiento = v;
    }
    get Dni(): number{
        return this.dni;
    }
    set Dni(v: number) {
        this.dni = v;
    }
    calcularEdad(): number{
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        let mes = hoy.getMonth() - this.nacimiento.getMonth();
        if(mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())){
            edad--;
        }
        return edad;
    }

}