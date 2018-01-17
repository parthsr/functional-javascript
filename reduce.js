function recur(arr,newArr)
{
  if(arr.length===0)
  {
    return newArr;
  }
  else {
    head = arr[0];
    tail = arr.slice(1);
    if(head in newArr)
    {
      newArr[head]++;
    }
    else {
      newArr[head] = 1;
    }
    return recur(tail,newArr);
  }
}
function reduce(arr, recur, initial) {
  // SOLUTION GOES HERE
  //let ini = initial.slice(-1);
  console.log(arr,'#######');
  console.log(recur);
  let x = recur(arr,initial);
  console.log(x,'***********');
  return x;
}

module.exports = reduce;

//
// //console.log(reduce(['anmol','parth','parth','shubham'],recur,{}));
let test1 = [ 'lorem', 'dolor', 'dolore', 'velit', 'ipsum', 'non', 'non', 'laboris', 'fugiat', 'minim', 'nisi',
  'deserunt', 'laborum', 'ex', 'occaecat', 'anim', 'est', 'dolore', 'nisi', 'occaecat', 'occaecat', 'commodo',
  'mollit', 'sit', 'minim', 'commodo'];
console.log(reduce(test1,recur,{}),'000000000000');
