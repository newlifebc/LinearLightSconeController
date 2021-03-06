const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const artnet = require('artnet')(options);

app.use(express.static(__dirname + '/public')); 

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/', express.static(__dirname + '/node_modules/bootstrap/dist')); // redirect bootstrap JS, CSS, and fonts

process.env.NODE_ENV = "production"; //"development"
var port = process.env.PORT || 80;
console.log('beginning LinearLightSconeController webserver now, running in '+process.env.NODE_ENV+' mode on port '+port+'.');
server.listen(port);