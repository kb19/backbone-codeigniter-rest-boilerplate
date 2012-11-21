define([
	'jquery',
	'lodash',
	'backbone',
	'vm',
	'events',
  	'text!templates/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){
	var AppView = Backbone.View.extend({
		el: '.main',
		initialize: function () {

		},
		render: function () {	
			var that = this;
			$(this.el).html(layoutTemplate);

			require(['views/header/menu'], function (HeaderMenuView) {
				var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
				headerMenuView.render();
			});
			require(['views/footer/footer'], function (FooterView) {
				// Pass the appView down into the footer so we can render the visualisation
				var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
				footerView.render();
			});
		
		}
	});
	return AppView;
});
