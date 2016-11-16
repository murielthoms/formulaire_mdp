var bcrypt = require('bcryptjs');
var saltRounds = 10;

const mdp = process.argv[2];
console.log(mdp);

bcrypt.hash(mdp, saltRounds, function(err,hash){

console.log(hash);
});