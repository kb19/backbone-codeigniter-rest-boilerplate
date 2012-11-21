define([
	'jquery',
	'lodash',
	'backbone',
	'text!templates/header/menu.html'
], function($, _, Backbone, headerMenuTemplate){
	var HeaderMenuView = Backbone.View.extend({
		el: '.main',
		initialize: function () {
		},
		render: function () {
			$(this.el).prepend(headerMenuTemplate);
			$('a[href="' + window.location.hash + '"]').addClass('active');
		},
		events: {
			'click a': 'highlightMenuItem'
		},
		highlightMenuItem: function (ev) {
			$('.active').removeClass('active');
			$(ev.currentTarget).addClass('active');
		}
	})

	return HeaderMenuView;
});
