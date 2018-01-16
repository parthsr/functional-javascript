// function checking()
// {
//   console.log(this);
// }
// this.checking();

var men = function (objectOfAdmiration) {
  return objectOfAdmiration();
};
men.isSweetHeart = true;

var women = function (objectOfAdmiration) {
  return objectOfAdmiration();
};
women.isSweetHeart = true;

var aliens = function (objectOfAdmiration) {
  return objectOfAdmiration();
};

function like(obj){
  if (obj.isSweetHeart) {
      return function (){ return "Holy TRUE!"};
  }
  else {
      return function (){ return "Holy CRAP!"};
  }
}

console.log("Men like women is " + men(like(women))); // -> "Holly TRUE!"
console.log("Women like men is " + women(like(men))); // -> "Holly TRUE!"

console.log("Men like aliens is " + men(like(aliens))); // -> "Holly CRAP!"
console.log("Aliens like women is " + aliens(like(women))); // -> "Holly TRUE!" :)

console.log("Women like aliens is ",women(like(aliens))); //  Who knows? Life is sometimes so unpredictable... :)
