var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render("Index");
})

app.post('/result', function (req, res) {
    var Info = {
        Name: req.body.Name,
        Location: req.body.DojoLocation,
        Language: req.body.FavoriteLanguage,
        Comment: req.body.Comment
    }
    res.render("result", { Info: Info });
})

app.listen(8000, function () {
    console.log("listening on port 8000");
});