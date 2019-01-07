const max = process.argv[2];
let fizz = '';    
let FizzBuzz = function*() {
      
       for(var iterator of max){
            if (iterator % 3 ===0 && iterator %5 ===0){
                yield fizz += 'FizzBuzz';
            } else if(iterator % 3 ===0){
                yield fizz += 'Fizz';
            } else if (iterator %5 ===0){
                yield fizz += 'Buzz';
            } else yield fizz += iterator;
       } 
      }
    

    for (var n of FizzBuzz) {
      console.log(n);
    }