module.exports = function makeImportant(cadena,longitud) { // what goes here?                                                                                                                                                  
    let final=longitud;
    if (longitud === undefined) {
        final = cadena.length;
    }
    let copiaCadena = '';
    for (let i = 0; i < final; i++) {
        copiaCadena += '!'
    }
    return cadena + copiaCadena;
};