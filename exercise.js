// var mynovel={
//     name:'it end with us',
//     bookby:'colleen hoover',
//     genres:'fiction',
//     year :2017,
//     rating:4.5,
// }
// console.log('Book by'+ bookby);
// console.log(mynovel.genres)
// console.log(mynovel['name'])
// console.log(mynovel['name']['year'])


// var name='it end with us'
// var bookby='colleen hoover'
// var genres='fiction'
// var year =2017
// var rating=4.5
// console.log('name')
// console.log('bookby')
// console.log('year')
// console.log('Amazon rating is '+ rating)
// console.log('Book genres is '+ genres)

// var pagestart=1
// var pageend=349
// console.log(pagestart +pageend)

// var firstname='colleen'
// var lastname='hoover'
// console.log(firstname + lastname)

// var num=70
// console.log(num++)
// console.log(num)
// num++;

// console.log(80*40)
// //if 
// var pageno=70
// if(pageno<50) {
//     console.log('page number is less than 50')
// }else{
//     console.log('page number is greater than 50')
// }

// //if else
// var pageno=70
// if(pageno<50) {
//     console.log('page number is less than 50')
// }else if (pageno=70){
//     console.log('page number are equal')
// }else{
//     console.log('page number is greater than 50')
// }

//for
// for(var i=0;i<10;i++){
//     console.log(i)
//     }
//     for(var i=0;i<=5;i++){
//         console.log('the number is '+i+' now')
//         }
//         for(var i=0;i<5;i++){
//             console.log('hai..')
//             }

// var books=['horror','thriller','romance']
//var rating=[1,2,3,4,5]
// console.log(books[1])
// console.log(rating)
// console.log(books.length)
//to add var
var books =['horror','thriller','romance']
//books .pop()
//console.log(books)
//books .pop()
books .push('comedy')
//books .unshift('comedy')
console.log(books)

//switch
// var value=2;
// switch(value) {
//     case 1:console.log('the value is 1')
//     break;
//     case 2:console.log('the value is 2')
//     break;
//     case 3:console.log('the value is 3')
//     break;
//     default:console.log('reached default')
//     break;
// }

// //JSON
 var payload=[ 
     {
         "name":"hema",
         "age":10,
         "address":{
             "addressline1":"123 main st",
             "addressline2":"xyz aprt",
             "addressline3":"florida"
         },
         "email":"hema04.com"
     },
 {
    "name":"adam",
    "age":20,
    "address":{
        "addressline1":"123 main st",
        "addressline2":"xyz aprt",
        "addressline3":"LA"
    },
    "email":"hema04.com"
}
]

// Count a string
function countString(str,letter){
    let count=0;
 
 //var str="count the number of characters in string"
 //count=0;
 for(let i=0;i< str.length;i++){
     if(str.charAt(i) == letter){
         count += 1;
     }
 }
 return count;
 }
 const string= prompt('enter a string: ');
 const lettertoCheck = prompt('enter a letter to check:');
 const result=countString(string,lettertoCheck);
 console.log(result);

 //langest string
 function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['a', 'aa', 'aaa',
                                            'aaaaa','aaaa']))