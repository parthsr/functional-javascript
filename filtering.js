
function getShortMessages(messages)
{
  var newArray = messages.filter(function (message){
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
