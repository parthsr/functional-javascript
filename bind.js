function bindExample(namespace) {
  let params = function params(){
    console.log( Array.prototype.slice.call(arguments).join(' '));
  };
  return params.bind(null, namespace);
};

module.exports = bindExample;

bindExample('hello')('hi','ho','hahahaha');
console.log('test case 1 for valid inputs',true);

bindExample('')('');
console.log('test case 2 for empty params and namespace',true);

bindExample('')('hi','hello');
console.log('test case 3 for empty namespace',true);

bindExample('hello')('');
console.log('test case 4 for empty params', true);
