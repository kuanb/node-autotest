var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var counter = 0;
setInterval(function () {
	console.log('Yo the current status of the counter is: ' + 0);
}, 1000)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


