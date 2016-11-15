var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var donnees ={
	motdepasse: "motdepasse",
	utilisateur: "romuald",
};

app.post('/users', function(req, res){

	var post = req.body;
	console.log(post);
	if (donnees.motdepasse === post.mdp && donnees.utilisateur === post.nom){
		console.log("success");
		res.sendFile(__dirname +'/public/affiche.html');
	} 
	else {
		console.log("fail");
		res.send({fail:"Le mot de passe ou le nom d'utilisateur est incorrect!"});
	}
});

app.get('/', function(req, res){
	res.send('ok');

});

app.listen(2345, function(){
	console.log(' ça fonctionne...ou pas!');

});
