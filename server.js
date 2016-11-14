var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var donnee ={

	motdepasse: "motdepasse",
	utilisateur: "romuald",

};
app.post('/users', function(req, res){


	var post = req.body;

	 console.log(post);

	if (donnee.motdepasse === post.mdp && donnee.utilisateur === post.nom){
		res.sendfile(__dirname +'/public/affiche.html');

	} else {
	res.send("le mot de passe est incorrect");

	}







});




app.get('/', function(req, res){
	res.send('ok');

});

app.listen(2345, function(){
	console.log(' ça fonctionne...ou pas!');

});
