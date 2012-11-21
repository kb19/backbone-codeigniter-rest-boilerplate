define([
	'jquery',
	'lodash',
	'backbone',
	'events',
	'text!templates/footer/footer.html'
], function($, _, Backbone, Events, footerTemplate){
	var FooterView = Backbone.View.extend({
		el: '.main',
		intialize: function () {

		},
		render: function () {
			$(this.el).append(footerTemplate);
		}
	});

	return FooterView;
});
