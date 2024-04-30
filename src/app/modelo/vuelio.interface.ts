import { Usuario } from "./usuario.interface";

export interface Parada {
    llegada: string;
    salida: string;
    avion: string;
}

export interface Vuelo {
    price: {
        grandTotal: number;
        currency: string;
    };
    lastTicketingDate: string;
    numeroDeParadas: number;
    numberOfBookableSeats: number;
    validatingAirlineCodes: string;
    segmentos: Parada[];
    usuarios: Usuario[];
}

