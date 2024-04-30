import { Vuelo } from "./vuelio.interface";

export interface Usuario{

    nombre: string;
    apellido: string;
    correo: string;
    ciudad: string;
    celular: string;
    contrasena: string;
    vuelos: Vuelo[];

}