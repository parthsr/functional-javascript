function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(
      function (users) {
        return goodUsers.some(function (element)
          {
            return element === users;
          });
      });
  };
}



module.exports = checkUsersValid;

console.log("use case test case", checkUsersValid([1,2,3,4,5])([2,8])===false);
console.log("use case test case 2", checkUsersValid([1,2,3,4,5])([2,3])===true);
