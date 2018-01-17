let slice = Array.prototype.slice;

function logger(namespace) {

  return function toApply(){
    console.log(namespace , slice.apply(arguments).join(' '));
  };
}
module.exports = logger;


// logger
//
// let a = {'0':'parth','1':'anmol'};
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
