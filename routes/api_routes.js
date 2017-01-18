var express = require("express"),
    mustache = require("mustache"),
    appRouter = express.Router();

var ALLOWED_IPS = ["127.0.0.1"]
appRouter.use(function(req, res, next){
	var isUserAllowed = (ALLOWED_IPS.indexOf(req.ip) != -1)
	if(true || isUserAllowed){
		next();
	} else {
		res.status(404).send("You're not allowed to access this site.")
	}
});

appRouter.get('/users', function(req, res){
	var users = mustache.render("Hello {{first_name}} {{last_name}}",
		{
			first_name: "Chandan",
			last_name: "Jhunjhunwal"
		})
	res.status(200).send(users)
});

module.exports = appRouter;