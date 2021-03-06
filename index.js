var express = require('express');
var path = require('path');

var app = express();

var PORT = (process.env.PORT || 3000); 

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/static_pages', 'index.html'));
});

app.listen(PORT);
console.log("Project Accessibility is running on port " + PORT);

