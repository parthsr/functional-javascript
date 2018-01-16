var doubleAll = function doubleAll(numbers)
{
    return numbers.map(double);
}

function double(num){
  return num*2;
}

module.exports = doubleAll;
console.log(module.exports);
