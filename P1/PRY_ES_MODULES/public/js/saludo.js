export function fn_saludar(nombres, apellidos) {
    return `HOLA ${nombres}, ${apellidos} Buenas Noches`;
}


//puedes exportar funciones e incluso variables yonstantes
export const mensajeDespedida = '¿Ya te vas? Esperamos verte de nuevo muy pronto!';

export let nombres;
export let apellidos;

export function nombresApellidos(nuevosNombres, nuevosApellidos) {
    nombres = nuevosNombres;
    apellidos = nuevosApellidos;
}