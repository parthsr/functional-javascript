function duckCount() {
  // SOLUTION GOES HERE
  let newArr = Array.prototype.slice.call(arguments).filter(
    function (arg){
      return Object.prototype.hasOwnProperty.call(arg,'quack');
    }
  );
  return newArr.length;
}

module.exports = duckCount;


console.log('valid test case 1', duckCount({'quack':'true'}, {'hello':'false'})===1);
console.log('test case 2 for empty args',duckCount()===0);
console.log('test case for changing object ', duckCount({'quack': 'false'})===1);

console.log('test case for creating object', duckCount(Object.create({quack : true}))===0);
