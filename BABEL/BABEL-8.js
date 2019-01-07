const max = process.argv[2];
let fizz = '';    
let FizzBuzz = {
      [Symbol.iterator]() {
       for(var iterator of max){
            if (iterator % 3 ===0 && iterator %5 ===0){
                return fizz += 'FizzBuzz';
            } else if(iterator % 3 ===0){
                return fizz += 'Fizz';
            } else if (iterator %5 ===0){
                return fizz += 'Buzz';
            } else return fizz += iterator;
       } 
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
    }