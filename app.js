var express = require("express"),
	path = require("path"),
	appRouter = require("./routes/api_routes")
	app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use("/api", appRouter);

app.use(function(req, res){
	res.status(404).send("Page Not Found!")
});

app.listen(3000, function(){
	console.log("Server running on port: 3000")
});
