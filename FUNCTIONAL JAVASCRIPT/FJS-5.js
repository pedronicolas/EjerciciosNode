function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    var result = [];
    result = submittedUsers.filter(function (elemento) {
      return goodUsers.includes(elemento);
    });
    return result.length === submittedUsers.length;
  };

}
module.exports = checkUsersValid;

/* 
  
PREGUNTAR COMO HACER LA FUNCIÓN CON EVERY Y SOME
  
*/
`SE PUEDE HACER ASI:
module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}`