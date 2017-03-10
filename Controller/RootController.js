"use strict";
var ViewController	= require('matts-toolbox').Server.ViewController;

module.exports = class RootController extends ViewController {
	
	
	constructor() { super(); }


	index(helper, send, reject) {
		this.renderView('LandingPage/index.html', {}).then(send).catch(reject);		
	}
	
}