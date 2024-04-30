import { Usuario } from "./usuario.interface";

export interface Parada {
    llegada: string;
    salida: string;
    avion: string;
}

export interface Vuelo {
    precio: {
        precio: string;
        currency: string;
    };
    lastTicketingDate: string;
    numeroDeParadas: number;
    numberOfBookableSeats: number;
    validatingAirlineCodes: string;
    paradas: Parada[];
    usuarios: Usuario[];
}

