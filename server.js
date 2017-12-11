var express = require('express');
var morgan = require('morgan');
var path = require('path');
var https = require("https");
var request = require('request');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
 

var app = express();

var data1;
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/authors', function (req, res) {
  
  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body1) {
     console.log('error:', error); // Print the error if one occurred and handle it
     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      data1 = JSON.parse(body1);
     
    request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      var data = JSON.parse(body);
      length1 = data.length ;
      for(var i = 0; i < length1; i++) {
        var uid = data[i].id;
        var arrayFound = postCount(uid); 
        var str = " ".repeat(50-data[i].name.length);
        res.write(data[i].name + str + arrayFound + "\n");
        
      }
      res.end();
    });
});
});

app.get('/setcookie', function (req, res) {
   res.cookie('name' , "Jobis");
   res.cookie('age' , 22).send('Cookie is set');
   console.log(req.cookies);
});

app.get('/getcookies', function (req, res) {
  res.send(req.cookies);
});

app.get('/robots.txt', function (req, res) {
  res.redirect("http://httpbin.org/deny");
});

app.get('/image', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image1.jpeg'));
});

app.get('/input', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'input.html'));
});

app.post('/inputreceive', function (req, res) {
  console.log(req.body.myText);
  res.redirect('/image');
});
/*
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

*/
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

function postCount(uid) {
  var count = 0;
  for(var i = 0; i < data1.length; i++) {
    if (data1[i].userId == uid) {
      count++;
    }
  }
  return count;
}

var port =8081;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
