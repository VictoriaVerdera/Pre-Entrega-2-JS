// Lógica cartas de tarot

const CANTIDAD_TIRADA = 5;
const MIN_CARTA = 1;
const MAX_CARTA = 78;

let continuar = true;

while (continuar) {

    let pregunta = prompt("Escribe tu pregunta");
    console.log(pregunta);

    for (let i = 1; i <= CANTIDAD_TIRADA; i++) {
        let carta = parseInt(prompt(`Seleccione un número de carta del 1 al 78. (${i}/${CANTIDAD_TIRADA})`));
        
        while( Number.isNaN(carta) || carta<1 || carta>78 ){
            carta = parseInt(prompt(`Número de carta no válido\nSeleccione un número de carta del 1 al 78. (${i}/${CANTIDAD_TIRADA})`));
        }

        switch (carta) {
            // ARCANOS MAYORES (1 al 22)
            case 1: console.log("El Loco"); break;
            case 2: console.log("El Mago"); break;
            case 3: console.log("La Sacerdotisa"); break;
            case 4: console.log("La Emperatriz"); break;
            case 5: console.log("El Emperador"); break;
            case 6: console.log("El Papa"); break;
            case 7: console.log("Los Enamorados"); break;
            case 8: console.log("El Carro"); break;
            case 9: console.log("La Fuerza"); break;
            case 10: console.log("El Ermitaño"); break;
            case 11: console.log("La Rueda de la Fortuna"); break;
            case 12: console.log("La Justicia"); break;
            case 13: console.log("El Colgado"); break;
            case 14: console.log("La Muerte"); break;
            case 15: console.log("La Templanza"); break;
            case 16: console.log("El Diablo"); break;
            case 17: console.log("La Torre"); break;
            case 18: console.log("La Estrella"); break;
            case 19: console.log("La Luna"); break;
            case 20: console.log("El Sol"); break;
            case 21: console.log("El Juicio"); break;
            case 22: console.log("El Mundo"); break;

            // ARCANOS MENORES - BASTOS (23 al 36)
            case 23: console.log("As de Bastos"); break;
            case 24: console.log("Dos de Bastos"); break;
            case 25: console.log("Tres de Bastos"); break;
            case 26: console.log("Cuatro de Bastos"); break;
            case 27: console.log("Cinco de Bastos"); break;
            case 28: console.log("Seis de Bastos"); break;
            case 29: console.log("Siete de Bastos"); break;
            case 30: console.log("Ocho de Bastos"); break;
            case 31: console.log("Nueve de Bastos"); break;
            case 32: console.log("Diez de Bastos"); break;
            case 33: console.log("Sota de Bastos"); break;
            case 34: console.log("Caballo de Bastos"); break;
            case 35: console.log("Reina de Bastos"); break;
            case 36: console.log("Rey de Bastos"); break;

            // ARCANOS MENORES - COPAS (37 al 50)
            case 37: console.log("As de Copas"); break;
            case 38: console.log("Dos de Copas"); break;
            case 39: console.log("Tres de Copas"); break;
            case 40: console.log("Cuatro de Copas"); break;
            case 41: console.log("Cinco de Copas"); break;
            case 42: console.log("Seis de Copas"); break;
            case 43: console.log("Siete de Copas"); break;
            case 44: console.log("Ocho de Copas"); break;
            case 45: console.log("Nueve de Copas"); break;
            case 46: console.log("Diez de Copas"); break;
            case 47: console.log("Sota de Copas"); break;
            case 48: console.log("Caballo de Copas"); break;
            case 49: console.log("Reina de Copas"); break;
            case 50: console.log("Rey de Copas"); break;

            // ARCANOS MENORES - ESPADAS (51 al 64)
            case 51: console.log("As de Espadas"); break;
            case 52: console.log("Dos de Espadas"); break;
            case 53: console.log("Tres de Espadas"); break;
            case 54: console.log("Cuatro de Espadas"); break;
            case 55: console.log("Cinco de Espadas"); break;
            case 56: console.log("Seis de Espadas"); break;
            case 57: console.log("Siete de Espadas"); break;
            case 58: console.log("Ocho de Espadas"); break;
            case 59: console.log("Nueve de Espadas"); break;
            case 60: console.log("Diez de Espadas"); break;
            case 61: console.log("Sota de Espadas"); break;
            case 62: console.log("Caballo de Espadas"); break;
            case 63: console.log("Reina de Espadas"); break;
            case 64: console.log("Rey de Espadas"); break;

            // ARCANOS MENORES - OROS (65 al 78)
            case 65: console.log("As de Oros"); break;
            case 66: console.log("Dos de Oros"); break;
            case 67: console.log("Tres de Oros"); break;
            case 68: console.log("Cuatro de Oros"); break;
            case 69: console.log("Cinco de Oros"); break;
            case 70: console.log("Seis de Oros"); break;
            case 71: console.log("Siete de Oros"); break;
            case 72: console.log("Ocho de Oros"); break;
            case 73: console.log("Nueve de Oros"); break;
            case 74: console.log("Diez de Oros"); break;
            case 75: console.log("Sota de Oros"); break;
            case 76: console.log("Caballo de Oros"); break;
            case 77: console.log("Reina de Oros"); break;
            case 78: console.log("Rey de Oros"); break;

            default:
                console.log("Número de carta inválido (seleccione un número del 1 al 78)");
                i--;
        }
    };

    let seguir = prompt("Desea continuar? (Si/No)").toLowerCase();
    if (seguir === null || seguir.trim() === "no") {
        continuar = false;
    };

};
