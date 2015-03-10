var express = require('express'),
app     = express(),
bodyParser=require('body-parser'),
	mongoose=require('mongoose'),
meetupsController=require('./server/controllers/meetups-controller');
mongoose.connect('mongodb://abc:abc@ds043947.mongolab.com:43947/dbmean');
app.use(bodyParser());
app.get('/',function(req,res){
    res.sendFile(__dirname+'/client/views/index.html');
});
app.use('/js',express.static(__dirname+'/client/js'));
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);
app.listen(process.env.PORT || 5000);
console.log("Server running on port no. 5000");