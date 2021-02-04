var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

var port = PORT

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();

// admin main page. the dashboard (http://localhost:PORT/admin)
adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); 
});

// users page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); 
});
// posts page (http://localhost:PORT/admin/posts)

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!'); 
});

 // apply the routes to our application
app.use('/admin', adminRouter); 

app.listen(PORT);

console.log(`Express Server running at ${PORT}`);