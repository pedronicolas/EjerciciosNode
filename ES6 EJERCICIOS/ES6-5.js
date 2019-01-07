 module.exports = function average(...args) { // what goes here?                                                                                                                                                  
    let reducido = args.reduce((valorAnterior,valorActual) =>{
        return valorAnterior+ valorActual;
    },0);
    return reducido/args.length;
};