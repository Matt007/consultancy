"use strict";

var Environment = require('matts-toolbox').Server.Environment;

module.exports = class Development extends Environment {
	
	
	constructor() { super();
		
		this.setPort(80);
		this.enableBuildInServer(false);
		this.enableDeveloperMode(false);
		this.enableAutoBuild(true);
		
		
		// Dependencies
		
		this.setLibrary('react', '/buildin/js/react/react-15.4.2.min.js');
		this.setLibrary('react-dom', '/buildin/js/react/react-dom-15.4.2.min.js');
		
	}
	
	
	Routing() {
	//	this.add();
	//	this.add();
	}

	
}