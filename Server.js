"use strict";


var Server		= require('matts-toolbox').Server.Server;
var ViewRoutes	= require('./Config/ViewRoutes');


var application = new Server('Consultancy', __dirname);
application.addViewRoutes(ViewRoutes)


application.start('Production').then(() => {
	console.log('server started')
}).catch(e => {
	console.log(e.stack);
})