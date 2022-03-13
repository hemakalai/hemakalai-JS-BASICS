//count the char in string
function countchar(str) {
  var count=str.length
  return count
}
console.log(countchar("count the char in string"));

// return the largest number
function largestno(a, b) {
    if(a > b)
        return a;
    else if(a === b)
        return 0;
    else
        return b;
}
console.log(largestno(10,20));

//Boolean flag
function boolean(value){
    if(value>=5000 && value<=9999)
    return true;
    else
    return false;
}
console.log(boolean(3458));

//cube root
function cuberoot(x){
let value=Math.cbrt(x);
return value
}
console.log(cuberoot(9261));

//convert inches into feet
function lengthConverter(inches) {
    ft=inches*0.083333
    return ft
  }
  console.log(lengthConverter(8));

//convert celcius to fahrenheit
function temperatureConverter(c) {
   let fh=(c*1.8)+32
   return fh
}
console.log(temperatureConverter(5));

//convert kilogram to pounds
function weightConverter(kg) {
    let lb=kg*2.2046
    return lb
}
console.log(weightConverter(65));

//convert pounds to kilogram
function weightConverter(lb) {
    let kg=lb/2.2046
    return kg
}
console.log(weightConverter(32));

