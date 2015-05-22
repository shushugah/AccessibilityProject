var connect = require("connect");
var serveStatic = require('serve-static'); 
var app = connect();

var PORT = (process.env.PORT || 3000); 


app.use(serveStatic("views/",{index: ["static_pages/index.html"]}))


app.listen(PORT);
console.log("Project Accessibility is running on port " + PORT);

