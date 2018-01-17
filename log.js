let slice = Array.prototype.slice;

function logger(namespace) {

  return function toApply(){
    console.log(namespace , slice.apply(arguments).join(' '));
  };
}
module.exports = logger;



// let a = {'0':'parth','1':'anmol','length':2};
// // a=[1,2,3];
// console.log(slice.call(a));
//
// // Array.prototype.hasOwnProperty.call(args,'quack');
// // args.hasOnw('QUACK');
// //
// //
// // a.slice(1);
// //
// // slice.call(a,1);

logger('hello')('hi','how','are','you?');
console.log('valid test case 1',true);
logger('hello')();
console.log('valid test case 2 with no extra params',true);
logger()('hi','how','are','you');
console.log('invalid test case 3 with no namespace and params existing',false);
logger('')('hi','how','are','you');
console.log('valid test case 4 with empty namespace and params existing',true);
logger('')('');
console.log('valid test case 5 with empty namespace and empty params', true);
