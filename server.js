const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.render("index");
});
app.listen(PORT, function() {
    console.log("Server is running");
});