function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(
      function (users) {
        return goodUsers.some(function (element)
        {
          return element.id === users.id;
        });
      });
  };
}



module.exports = checkUsersValid;

let goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

let testAllValid = [
  { id: 2 },
  { id: 1 }
];

console.log('use case test case', checkUsersValid(goodUsers)(testAllValid)===true);

goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

testAllValid = [
  { id: 2 },
  { id: 1 },
  { id: 3},
  { id: 4}
];

console.log('use case test case 2', checkUsersValid(goodUsers)(testAllValid)===true);

console.log('use case for test case 3 wherein goodUsers is empty', checkUsersValid([])(testAllValid)==false);
console.log('use case for test case 3 wherein testAllValid is empty', checkUsersValid(goodUsers)([])==false);
