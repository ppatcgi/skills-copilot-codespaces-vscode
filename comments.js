// Create web server
var express = require('express');
var app = express();

// Create a router
var router = express.Router();

// Route for the home page
router.get('/', function(req, res) {
    res.send('Welcome to my website!');
});

// Route for the about page
router.get('/about', function(req, res) {
    res.send('Welcome to the about page!');
});

// Route for the contact page
router.get('/contact', function(req, res) {
    res.send('Welcome to the contact page!');
});

// Route for the products page
router.get('/products', function(req, res) {
    res.send('Welcome to the products page!');
});

// Route for the services page
router.get('/services', function(req, res) {
    res.send('Welcome to the services page!');
});

// Apply the router to the app
app.use('/', router);

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});