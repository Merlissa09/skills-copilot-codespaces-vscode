// create web server
// start web server
// handle requests
// handle responses
// send responses
// close web server

// 1. create web server
var express = require('express');
var app = express();

// 2. start web server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started on port ' + port);
});

// 3. handle requests
// GET /comments
app.get('/comments', function(request, response) {
  // 4. handle responses
  var comments = [
    {
      id: 1,