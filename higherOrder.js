let counter =0;
var repeat = function repeat(operation,num)
{
  if(num>0)
  {
    counter+=1;
    operation();
    repeat(operation,num-1);
  }
}

// var func = function(){
//   console.log("callback function being executed",counter);
// }
// repeat(func,5);
// console.log("checking the number of times recursion happens",counter );
module.exports = repeat;
