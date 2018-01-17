function reduce(arr, fn, initial) {
  return function recursion(acc,index){
    if(index>=arr.length){
      return acc;
    }
    else {
      return recursion(fn(acc,arr[index],index,initial),index+1);
    }
  };
}

module.exports = reduce;


//console.log(reduce(['anmol','parth','parth','shubham'],recur,{}));
let test1 = [ 'lorem', 'dolor', 'dolore', 'velit', 'ipsum', 'non', 'non', 'laboris', 'fugiat', 'minim', 'nisi',
  'deserunt', 'laborum', 'ex', 'occaecat', 'anim', 'est', 'dolore', 'nisi', 'occaecat', 'occaecat', 'commodo',
  'mollit', 'sit', 'minim', 'commodo'];

let ans1 = { lorem: 1,
  dolor: 1,
  dolore: 2,
  velit: 1,
  ipsum: 1,
  non: 2,
  laboris: 1,
  fugiat: 1,
  minim: 2,
  nisi: 2,
  deserunt: 1,
  laborum: 1,
  ex: 1,
  occaecat: 3,
  anim: 1,
  est: 1,
  commodo: 2,
  mollit: 1,
  sit: 1 };

console.log('test case 1 for the use case ',JSON.stringify(reduce(test1,recur,{})({},0))=== JSON.stringify(ans1));

let test2 = [];
let ans2 = {};

console.log('test case 2 for empty array', JSON.stringify(reduce(test2,recur,{})({},0))=== JSON.stringify(ans2));


let test3 = ['','','','','apple'];
let ans3 = {'': 4, 'apple':1};

console.log('test case 2 for empty strings', JSON.stringify(reduce(test3,recur,{})({},0))=== JSON.stringify(ans3));

let test4 = ['CAPITAL','capital'];
let ans4 = {'CAPITAL': 1,'capital': 1};

console.log('test case 2 for different cases strings', JSON.stringify(reduce(test4,recur,{})({},0))=== JSON.stringify(ans4));


function recur(acc,head,index,initial)
{
  if(head in acc)
  {
    acc[head]++;
  }
  else {
    acc[head] = 1;
  }
  return acc;
}
