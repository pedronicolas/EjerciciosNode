//Global scope
var a;  //No hay que usar. En ES6 no la usaremos.
let b; //No se sobreescribe fuera de su scope.
const PI = 3.14;//No se puede cambiar el valor nunca.Como en todos los idiomas.

//Arrow Functions

let singulares = ['manzana','pera'];
let plurales = singulares.map(fruta => fruta +'s');
/*
Le aplicamos el mapeo a singulares con la función que hace eso nada más.
*/
// console.log(fruta); Como está fuera de la función no está definida.
console.log(plurales);
/*
Con este tipo de función es todo mucho más legible. 
La usaremos de ahora en adelante.
*/





