var Route		= require('matts-toolbox').Server.Route;

var RootController	= require('./../Controller/RootController');
var rootController	= new RootController();


var WhatWeDoController	= require('./../Controller/WhatWeDoController');
var whatWeDoController	= new WhatWeDoController();

var WhoWeAreController	= require('./../Controller/WhoWeAreController');
var whoWeAreController	= new WhoWeAreController();



module.exports = [
	
	
	
	
	new Route('/what-we-do/consultation',	whatWeDoController, 'consultation'),
	new Route('/what-we-do/events',			whatWeDoController, 'events'),
	new Route('/what-we-do/maintenance',	whatWeDoController, 'maintenance'),
	new Route('/what-we-do/development',	whatWeDoController, 'development'),
	new Route('/what-we-do',				whatWeDoController, 'index'),
	
	
	new Route('/who-we-are/management',		whoWeAreController, 'management'),
	new Route('/who-we-are/team',			whoWeAreController, 'team'),
	new Route('/who-we-are/contact',		whoWeAreController, 'contact'),
	new Route('/who-we-are',				whoWeAreController, 'index'),
	
	new Route('/',							rootController, 'index')
	
	
	
]