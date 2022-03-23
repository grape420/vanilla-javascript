let age = 10;
function make() {
  // TDZ 
  // console.log(age);
  let age = 30;
}

make();
console.log(age);