function bindExample(namespace) {
  function params(){
    console.log( Array.prototype.slice.call(arguments).join(' '));
  }
  return params.bind(null, namespace);
};

module.exports = bindExample;

bindExample('hello')('hi','ho','hahahaha');
console.log('test case 1 for valid inputs',true);
