import {Jugador} from './Jugador';
interface Contrato{
    contratar(Jugador: Jugador): void;
    renovarContrato(Jugador: Jugador): void;
}
export class Equipo implements Contrato{
    private nombre: string;
    private jugadores: Set<Jugador>;
    constructor(nombre: string){
        this.nombre = nombre;
        this.jugadores = new Set<Jugador>();
    }
    get Nombre(): string{
        return this.nombre;
    }
    set Nombre(v: string) {
        this.nombre = v;
    }
    get Jugadores(): Set<Jugador>{
        return this.jugadores;
    }
    set Jugadores(v: Set<Jugador>) {
        this.jugadores = v;
    }
    contratar(jugador: Jugador): void {
        try{
            jugador.verificarJugador();
            this.jugadores.add(jugador);
        }catch(e){
            console.log(e);
        }
    }
    verificarClub(jugador:Jugador): void{
        if(jugador.ClubActual == this && jugador.calcularEdad()>35){
            throw new Error("El jugador no tiene la edad permitida para renovar su contrato");
        }else if(jugador.ClubActual != this && jugador.calcularEdad()>35){
            throw new Error("El jugador no esta en el club para renovar su contrato");
        }else{
            throw new Error("El jugador no tiene la edad permitida ni esta en el club para renovar su contrato");
        }
        
    }
    renovarContrato(Jugador: Jugador): void {
        try{
            this.verificarClub(Jugador);
            Jugador.verificarJugador();
            this.jugadores.add(Jugador);
        }catch(e){
            console.log(e);
        }
    }
}