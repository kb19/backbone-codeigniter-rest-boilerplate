// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		// Major libraries
		jquery: 	'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
		lodash: 	'libs/lodash/lodash', // alternative to underscore
		backbone: 	'libs/backbone/backbone-min', // https://github.com/amdjs
		bootstrap: 	'libs/bootstrap/bootstrap',

		// Require.js plugins
		text: 		'libs/require/text',

		// Just a short cut so we can put our html outside the js dir
		// When you have HTML/CSS designers this aids in keeping them out of the js directory
		templates: '../templates',

		// Mustache plugin info
		mustache: 	'libs/mustache/mustache'
	},

	shim: {
			//Twitter Bootstrap jQuery plugins
			bootstrap: {
	            deps: ['jquery'],
	            exports: "bootstrap"
	        },
		}
});

// Let's kick off the application

require([
	'views/app',
	'router',
	'vm',

	// Include on every page without having to re-define
	'bootstrap'
], function(AppView, Router, Vm){
	var appView = Vm.create({}, 'AppView', AppView);
	appView.render();
	Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
