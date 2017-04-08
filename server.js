var express = require('express');
var app = express();
var path = require('path');

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', upload.single('uploadedfile'), function (req, res, next) {
  res.send({"name": req.file.originalname, "size": req.file.size});
});

/*
app.listen(8080, function() {
  console.log('Node app is running on port', app.get('port'));
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
