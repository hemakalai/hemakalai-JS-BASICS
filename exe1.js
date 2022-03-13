// return langest string
function largeststring(arr) {
    var max_str=arr[0].length;
    var value=arr[0];
    for(var i=1;i<arr.length;i++){
        var maxi=arr[i].length;
        if(maxi>max_str){
            value=arr[i];
            max_str=maxi;
        }
    }
return value;
}
console.log(largeststring(["aaaa","aa"]))

var arr=['hemakalai','sugi','janani'];
function largeststring(arr) {
   for( var i=0;i<arr.length;i++){
       var lgth=arr[i].length ;
       return lgth
   }
}
console.log(largeststring(arr));


const array=["hello","hi","welcome"];
function longestword(array){
    array.sort(function(a,b){
    return a.length - b.length;

}
console.log(longestword(["hema","janani"])));
//
const array=["hello","hi","welcome"];
function longestword(array){
const value=array.sort((a,b) => b.length - a.length);
return value
}
console.log(longestword);

// return shortest string
function shortestword(arr){
    if(arr.length === 0 && arr.indexof(arr)){
        return '';
    } else{
        return arr.reduce(function(a,b){
            return a.length >= b.length ? a:b;
        })
    }
    }
    console.log(shortestword(['hema','janani']));



function shortestword(array){
   array= ['hemakalai','hema'],
  shortest=array.reduce((a,b)=> a.length <=b.length ? a: b);
  return shortest
}
console.log(shortestword);
    
function shortestword(arr1,arr2){
   arr.sort(function (a,b) {
       if arr2 return a.length - b.length;
       else return b.length - a.length;

   })
}
