let burger = require('../models/burger');
let path = require('path');

// == express =================================================
express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));
// app.use("/public/assets/", express.static(path.join(__dirname, "/public/assets/")));
// =============================================================

// === handlebars ==============================================
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// =============================================================

// My 'express.static' above doesn't seem to work...
// app.get("/public/assets/:file", function(req, res) {
//     let file = path.join(__dirname, '../public/assets/') + req.params.file;
//     console.log("Sending file: " + file);
//     res.sendFile(file);
// });

// Home - same as '/index'
app.get("/", function(req, res) {
    res.redirect("/index");
});

// Get all burgers and render in 'index'
app.get("/index", function(req, res) {
    burger.getBurgers(function(results) {
        res.render("index", {burger: results});
    });
});

// Add a new burger with 'name'
app.post("/api/burger", function(req, res) {
    let name = req.body.name;
    console.log(req.body);
    console.log("name: "+ name);
    burger.addBurger(name, function() {
        // I want it to redirect to '/index',but this doesn't work. 
        // Instead the client JS sets window.location = '/index'
        // res.redirect("/index"); // (DOES NOT WORK ???)
        res.send("done");
    })
});

// Update burger with 'id' to devoured = true
app.put("/api/burger", function(req, res) {
    let id = req.body.id;
    console.log("PUT id: " + id);
    burger.devourBurger(id, function() {
        // I want it to redirect to '/index',but this doesn't work. 
        // Instead the client JS sets window.location = '/index'
        // res.redirect("/index"); // (DOES NOT WORK ???)
        res.send("done");
    });
});

// Export just 'listen'
let router = {
    listen: function() {
        app.listen(PORT, function() {
            console.log("Listening on port " + PORT);
        });
    },
    
};
module.exports = router;

// TEST
// router.listen();
