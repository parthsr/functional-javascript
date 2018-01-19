function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;
  operation();
  setTimeout(function(){
    return repeat(operation, --num);},0);
}

module.exports = repeat;

function operation()
{
  console.log('operation');
}
repeat(operation,10);

for(let i=0;i<100000000;i++)
{

}
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
