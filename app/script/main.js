/* global $, Dexie, Backbone */

/**************************************************
 *****************My Global Variables*************/

var App = {
	db: {},
	Models: {},
	Collections: {},
	Views: {},
	Reasons: {},
	ReasonsView: {},
	AddReasonView: {},
	ChangeReasonView: {}
};

/**************************************************
*****************Models***************************/

App.Models.Reason = Backbone.Model.extend({
	defaults: {
		id: '',
		reasonText: '',
		date: ''
	},
	dbCollection: function() {
		return 'reasons';
	},
	validate: function(attributes) {
		return false;
	},
	initialize: function(attributes) {
		return this;
	}
});

Backbone.sync = function(method, model) {
	switch(method) {
		case 'create':
			App.db[model.dbCollection()].add(_.omit(model.attributes, 'id')).then(function(key) {
				model.set('id', key);
				App.ReasonsView.render();
			});
			break;
		case 'update':
			App.db[model.dbCollection()].update(model.get('id'), _.omit(model.attributes, 'id'));
			break;
		case 'delete':
			App.db[model.dbCollection()].delete(model.id);
			break;
	}
};

/**************************************************
******************Collections*********************/

App.Collections.Reasons = Backbone.Collection.extend({
	model: App.Models.Reason
});

/**************************************************
***********************Views**********************/

App.Views.Reason = Backbone.View.extend({
	template: _.template($('#reason-template').html()),
	tagName: 'tr',
/*	attributes: function() {
		return {
			'data-toggle': "modal",
			'data-target': '#changeReasonModal'
		};
	}, */
	$container: null,
	initialize: function(options) {
		_.bindAll(this, 'render', 'insert');
		this.$container = options.$container;
		this.listenTo(this.model, 'change', this.render);
		this.insert();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	insert: function() {
		this.$container.append(this.$el);
	},
	events: {
		'click .deleteReason': 'deleteReason',
		'click .changeReason': 'changeReason'
	},
	deleteReason: function() {
		App.Reasons.remove(this.model);
	},
	changeReason: function() {
		alert('This works!');
	}
});

App.Views.Reasons = Backbone.View.extend({
	template: _.template($('#reasons-template').html()),
	el: $('#reasons-container'),
	initialize: function() {
		_.bindAll(this, 'render');
	},
	render: function() {
		this.$el.html(this.template());
		var $container = this.$('#reason-container');
		App.Reasons.each(function(reason){
			new App.Views.Reason({
				model: reason,
				$container: $container
			}).render();
		});
		return this;
	}
});

App.Views.AddReason = Backbone.View.extend({
	template: _.template($('#add-reason-template').html()),
	el: $('#add-reason-container'),
	initialize: function() {
		_.bindAll(this, 'render');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

App.Views.ChangeReason = Backbone.View.extend({
	template: _.template($('#change-reason-template').html()),
	el: $('#change-reason-container'),
	initialize: function() {
		_.bindAll(this, 'render');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

/**************************************************
 *************************************************/

$(document).ready(function () {
	'use strict';
	App.db = new Dexie("TestDatabase2");
	App.db.version(1).stores({reasons: "++id, reasonText, date"});
	App.db.open().then(function() {
		App.db.reasons.count(function(count) {
			if (count === 0) {
				App.db.reasons.add({
					reasonText: 'Here is a good reason!',
					date: new Date().getTime()
				});
				App.db.reasons.add({
					reasonText: 'Here is another good reason!',
					date: new Date().getTime()
				});
				App.db.reasons.add({
					reasonText: 'Here is even another good reason!',
					date: new Date().getTime()
				});
			}
			return this;
		});
	});
	App.Reasons = new App.Collections.Reasons();
	App.db.reasons.each(function(reason) {
		App.Reasons.add({
			id: reason.id || null,
			reasonText: reason.reasonText,
			date: reason.date
		});
	}).then(function() {
		App.AddReasonView = new App.Views.AddReason();
		App.AddReasonView.render();
		App.AddReasonView.$('form').submit(function(e) {
			e.preventDefault();
			var newReason = {
				reasonText: App.AddReasonView.$('#add-reason-textarea').val(),
				date: new Date().getTime()
			};
			App.Reasons.add(newReason);
			App.AddReasonView.$('#add-reason-textarea').val('');
		});
		App.ChangeReasonView = new App.Views.ChangeReason();
		App.ChangeReasonView.render();

		App.ReasonsView = new App.Views.Reasons();
		App.ReasonsView.render();
		App.Reasons.on({
			add: function (model) {
				model.sync('create', model);
				App.ReasonsView.render();
			},
			remove: function (model) {
				model.sync('delete', model);
				App.ReasonsView.render();
			},
			change: function (model) {
				model.sync('update', model);
				App.ReasonsView.render();
			}
		});
	});
});