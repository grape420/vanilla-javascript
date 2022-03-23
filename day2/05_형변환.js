'use strict';

// Number, parseInt, String, toString, toFixed
let a = 10;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);
console.log('=======================');
let b = '100';
console.log(b, typeof b);
b = Number(b);
console.log(b, typeof b);

console.log('=======================');
let c1 = '2000';
console.log(c1, typeof c1);
c1 = parseInt(c1);
console.log(c1, typeof c1);

let c2 = '50px';
let c3 = '10살';
c2 = parseInt(c2);      // parseInt : 문자열에서 숫자만 추출해줌
c3 = parseInt(c3);

console.log('=======================');
console.log(c2, typeof c2);     // 50
console.log(c3, typeof c3);     // 10

console.log('=======================');
let num1 = 10;
let d1 = num1.toString();     // 진법
console.log(d1, typeof d1);

d1 = num1.toString(2);    // 2진법
console.log(d1, typeof d1);

let num2 = 123.23141234;
let d2 = num2.toFixed(3);   // 소수점 셋째자리에서 반올림
console.log(d2);




