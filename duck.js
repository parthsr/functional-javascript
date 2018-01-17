function duckCount() {
  // SOLUTION GOES HERE
  let newObj = Array.prototype.slice.call(arguments).filter(
    function (arg){
      return (('quack' in  arg) ===true);
    }
  );
  return newObj.length;
}

module.exports = duckCount;


console.log('valid test case 1', duckCount({'quack':'true'}, {'hello':'false'})===1);
console.log('test case 2 for empty args',duckCount()===0);
