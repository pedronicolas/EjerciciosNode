var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI} from './MATH';
console.log(PI);

import {sqrt} from './MATH';
console.log(sqrt(+arg1)); 

import {square} from './MATH';
console.log(square(+arg2));