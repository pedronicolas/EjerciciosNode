let userArray = process.argv.slice(2);

const [id,username,email,log] = userArray;
const objeto = {username: username, email: email};
console.log(objeto);
