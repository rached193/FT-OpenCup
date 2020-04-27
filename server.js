//Install express server
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/temtem'));


app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/temtem/index.html'));
});


// Start the app by listening on the default Heroku port

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running at ${port}`);
});

