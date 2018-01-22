function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn();
    console.log(fn.toString());
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  });
};

trampoline(function(){
  return repeat(operation,100);
});

function operation()
{
  console.log('heloo');
}
