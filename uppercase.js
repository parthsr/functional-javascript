var upperCaser = function upperCaser(input){
  return input.toUpperCase();
}

exports.upperCaser = upperCaser;

console.log("should print a capital hello",exports.upperCaser("hello") );
