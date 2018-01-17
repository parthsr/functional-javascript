
function getShortMessages(messages)
{
  let newArray = messages.filter(function (message){
    return message.message.length<50;
  });
  newArray = newArray.map(returnMessage);
  return newArray;
}

function returnMessage(message)
{
  return message.message;
}

module.exports = getShortMessages;

console.log('checking returnMessage fucntion ', returnMessage({message: 'hello'}));
console.log('checking main usecase', getShortMessages([{message:'hello'}, {message:'hagsdjkvasuydvausvdjvajsdvajsvdjvahjdvuyacuyasvchas'}]));
