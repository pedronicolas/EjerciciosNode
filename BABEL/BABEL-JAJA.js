'use strict';
    // La variable `a` ha de estar accesible fuera del ámbito de bloque.
    let a = 5;

    // La variable `b` no ha de poder ser reasignada.
    const b = process.argv[2];

    if (a === 5) {
      // La variable `c` ha de estar disponible sólo en este bloque.
      let c = 4;
      console.log(c);  // 4

      // La variable `b` ha de estar disponible sólo en este bloque.
      let b = 8;
      console.log(b); // 8
    }

    console.log(a); // 5
    console.log(b);
    try {
      // Intenta reasignar el valor de `c`
      c = 1000;
    } catch (e) {
      
        console.log(e);
      }
      
    