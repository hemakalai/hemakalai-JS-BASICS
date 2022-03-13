//Area of rectangle
function areaofrectangle (l,b) {
    return 2*(l+b)
}
console.log (areaofrectangle(5,2))
//count the char in string

var str="count the number of characters in string"
count=0;
for(var i=0;i< str.length;i++){
    if(str.charAt(i) == 'n'){
        count ++;
    }
}
console.log(count);

//largest number

    function largest(a, b) {
        if(a > b)
            return a;
        else if(a === b)
            return 0;
        else
            return b;
    }
    console.log(largest(10,20));
    
//Boolean flag


Number.prototype.between = function (a, b) {
    var min = Math.min(a, b),
      max = Math.max(a, b);
  
    return this > min && this < max;
  };
  
  var num = 5555;
  
  console.log(num.between(5000, 9999));

//cube root

  function cube(n) 
{    
return n*n*n; 
}
console.log(cube(20));

//convert inches into feet


//convert celcius to fahrenheit

function cToF(celsius) 
{
  var cToFahr = celsius * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(5))

//convert fahrenheit to celcius

function FtoC(fahrenheit){
    let celcius = fahrenheit*5/9 -32;
    return celcius;
}
console.log(FtoC(20));

//convert kilogram to pounds


//langest string
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))

  
//shortest string

function shortest_string (str_ara) {
    var min = str_ara[0].length;
    str_ara.map(v => min = Math.min(min, v.length));
    result = str_ara.filter(v => v.length == min);
    return result;
  }
  
  console.log(shortest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']))

   





