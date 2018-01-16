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

// console.log("use case test case", checkUsersValid([1,2,3,4,5])([2,8])===false);
// console.log("use case test case 2", checkUsersValid([1,2,3,4,5])([2,3])===true);

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

var testAllValid = [
        { id: 2 },
        { id: 1 }
      ];

console.log("use case test case", checkUsersValid(goodUsers)(testAllValid)===true);
