var doubleAll = function doubleAll(numbers)
{
    return numbers.map(double);
}

function double(num){
  return num*2;
}

newArr = doubleAll([1,2,3])
module.exports = doubleAll;
console.log(newArr);
