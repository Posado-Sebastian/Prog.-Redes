export class Chef{
    private nombre: string;
    private nacimiento: Date;
    private experiencia: number;
    constructor(nombre: string, nacimiento: Date, experiencia: number){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.experiencia = experiencia;
    }
    getEdad(): number{
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        let mes = hoy.getMonth() - this.nacimiento.getMonth();
        if(mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())){
            edad--;
        }
        return edad;
    }

    get Experiencia(): number{
        return this.experiencia;
    }
    get Nombre(): string{
        return this.nombre;
    }
    get Nacimiento(): Date{
        return this.nacimiento;
    }
    
    set Experiencia(v: number) {
        this. Experiencia= v;
    }
    set Nombre(v: string) {
        this.Nombre = v;
    }
    set Nacimiento(v: Date) {
        this.Nacimiento = v;
    }
}