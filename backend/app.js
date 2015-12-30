/*!
 * @file
 *
 * @brief example backend server.
 *
 * @author Carsten Schneider <xxx>
 *
 * @version 0.0.1
 */

var express  = require('express');
var app      = express();

app.use(require('connect-livereload')());
app.use('/', express.static(__dirname + '/../build'));

var server = app.listen(3000,function(){
    console.log('App is running...');
});

var io = require('socket.io').listen(server);
