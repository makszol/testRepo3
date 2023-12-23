let a = 3;

function make(a) {
  console.log('Its a good number!');
}

make(a);

if (a < 10)
  console.log('All Ok !');

let fruit = (a > 2) 
  ? a++ 
  : ++a;
console.log(fruit);
console.log(a);