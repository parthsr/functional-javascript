
let counter =0;
var repeat = function repeat(operation,num)
{

  if(num>0)
  {
    operation();
    return repeat(operation,num-1);
  }
  else {
      return counter;
  }

}

var func = function(){
  counter++;
}

console.log("checking the number of times recursion happens",repeat(func,5));
counter=0;
console.log("should not execute if num is 0", repeat(func,-1));
module.exports = repeat;
