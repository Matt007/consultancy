"use strict";
var ViewController	= require('matts-toolbox').Server.ViewController;

module.exports = class WhoWeAreController extends ViewController {
	
	
	constructor() { super(); }


	index(helper, send, reject) {
		this.renderView('WhoWeAre/index.html', {}).then(send).catch(reject);
	}

	management(helper, send, reject) {
		this.renderView('WhoWeAre/management.html', {}).then(send).catch(reject);
	}
	
	contact(helper, send, reject) {
		this.renderView('WhoWeAre/contact.html', {}).then(send).catch(reject);
	}
	
	team(helper, send, reject) {
		this.renderView('WhoWeAre/team.html', {}).then(send).catch(reject);
	}
	
	
}