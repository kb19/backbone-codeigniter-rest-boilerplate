define([
	'jquery',
	'lodash',
	'backbone',
	'mustache',
	'text!templates/test/one.html'
], function($, _, Backbone, Mustache, template){
	var DashboardPage = Backbone.View.extend({
		el: '.page',
		render: function () 
		{			
			$(this.el).append(Mustache.render(template, {adjective: 'test'}));
		}
	});
	return DashboardPage;
});
