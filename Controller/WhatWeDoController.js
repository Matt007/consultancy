"use strict";
var ViewController	= require('matts-toolbox').Server.ViewController;

module.exports = class WhatWeDoController extends ViewController {
	
	
	constructor() { super(); }


	index(helper, send, reject) {
		this.renderView('WhatWeDo/index.html', {}).then(send).catch(reject);
	}

	consultation(helper, send, reject) {
		this.renderView('WhatWeDo/consultation.html', {}).then(send).catch(reject);
	}
	
	development(helper, send, reject) {
		this.renderView('WhatWeDo/development.html', {}).then(send).catch(reject);
	}
	
	maintenance(helper, send, reject) {
		this.renderView('WhatWeDo/maintenance.html', {}).then(send).catch(reject);
	}
	
	events(helper, send, reject) {
		this.renderView('WhatWeDo/events.html', {}).then(send).catch(reject);
	}
	
}