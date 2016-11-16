var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var donnees ={
	motdepasse: "$2a$10$vtIbrALzylSUHSJTO2WunOmjHDD1z67RH/Oj6b7ufqx.FtliCrA46",
	utilisateur: "romuald",
};

app.post('/users', function(req, res){

	var post = req.body;

	bcrypt.compare(post.mdp,donnees.motdepasse, function(err, rep) {
		if(rep){
			res.sendFile(__dirname +'/public/affiche.html');
		}
		else{
			res.send({fail:"Le mot de passe ou le nom d'utilisateur est incorrect!"});
		}

	});

});

app.get('/', function(req, res){
	res.send('ok');

});

app.listen(2345, function(){
	console.log(' ça fonctionne...ou pas!');

});
