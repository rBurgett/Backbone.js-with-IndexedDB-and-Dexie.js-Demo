/* jshint strict: true */
/* global $, Dexie, Backbone */

/*
 * This is a small application meant to demonstrate how Backbone.js can be used
 *     with indexedDB and Dexie.js (an indexedDB wrapper) to build a completely
 *     client-side application with a persistent data store.
 *
 * To learn more about the indexedDB API, visit:
 *     https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 *
 * For more on Dexie.js, check out:
 *     https://github.com/dfahlander/Dexie.js
 */

/**************************************************
 *****************My Global Variable(s)***********/

var App = {
	db: {},		//This will contain the indexedDB/Dexie instance.
	Models: {},		//This will contain the Backbone models.
	Collections: {},		//This will contain the Backbone collections
	Views: {},		//This will contain Backbone views
	Reasons: {},	//This will contain my Reasons collection
	ReasonsView: {},		//This will contain my Reasons view
	AddReasonView: {},		//This will contain my Add Reason view
	ChangeReasonView: {}		//This will contain my Change Reason view
};

/**************************************************
 **********Custom Backbone.sync() method**********/

/*
 * Backbone.js comes with  a sync() method which is called to sync data to the server.
 *     For this case, I created a custom Backbone.sync() which takes the same parameters
 *     but writes to indexedDB on the client's computer rather than to a DB on a server.
 * The first parameter is a string of a standard CRUD method (create, read, update, delete)
 * The second is an Backbone model object.
 * The third is an object
 */

Backbone.sync = function(method, model, options) {
	switch(method) {
		case 'create':		//called by the 'add' listener on the model

			/*
			 * The dbCollection property in the options parameter refers to the indexedDB collection
			 *     which the data is being stored in.
			 *
			 * You will also notice that I used Underscore to omit the 'id' attribute of each model.
			 *     This is because the DB assigns its own keys (ids) and I don't want to accidentally
			 *     overwrite the DB's automatically-assigned id or send an undefined value which will
			 *     throw an error.
			 *
			 * Dexie.js comes with a then() method which can contain a callback function to be called
			 *     following a successful DB transaction. So when making a new DB entry I use the then()
			 *     method to return the key to Backbone so it can update the model's id to match the DB.
			 */

			App.db[options.dbCollection].add(_.omit(model.attributes, 'id')).then(function(key) {
				model.set('id', key);
			});
			break;
		case 'update':		//called by the 'change' listener on the model
			App.db[options.dbCollection].update(model.get('id'), _.omit(model.attributes, 'id'));
			break;
		case 'delete':		//called by the 'remove' listener on the model
			App.db[options.dbCollection].delete(model.id);
			break;
	}
};

/**************************************************
*****************Models***************************/

App.Models.Reason = Backbone.Model.extend({
	defaults: {
		id: '',
		reasonText: '',
		date: ''
	},
	initialize: function(attributes) {
		return this;
	}
});

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
	events: function() {
		return {
			'click .deleteReason': 'deleteReason',
			'click .changeReason': 'changeReason',
			'mouseover': 'showButtons',
			'mouseout': 'hideButtons'
		};
	},
	deleteReason: function(e) {
		e.preventDefault();
		App.Reasons.remove(this.model);
	},
	changeReason: function(e) {
		e.preventDefault();
		var changeReasonView = new App.Views.ChangeReason({
			model: this.model
		});
		changeReasonView.render();
	},
	showButtons: function() {
		this.$('.changeReason').show();
		this.$('.deleteReason').show();
	},
	hideButtons: function() {
		this.$('.changeReason').hide();
		this.$('.deleteReason').hide();
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
	},
	events: function() {
		return {
			'submit form': 'addReason'
		};
	},
	addReason: function(e) {
		e.preventDefault();
		var newReason = {
			reasonText: App.AddReasonView.$('#add-reason-textarea').val(),
			date: new Date().getTime()
		};
		App.Reasons.add(newReason);
		this.$('#add-reason-textarea').val('');
	}
});

App.Views.ChangeReason = Backbone.View.extend({
	template: _.template($('#change-reason-template').html()),
	el: $('#change-reason-container'),
	initialize: function() {
		_.bindAll(this, 'render');
	},
	render: function(model) {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	events: function() {
		return {
			'click #saveChanges' : 'saveChanges',
		}
	},
	saveChanges: function() {
		this.model.set({
			reasonText: this.$('textarea').val()
		});
	}
});

/**************************************************
 *************************************************/

$(document).ready(function () {
	'use strict';

	App.db = new Dexie("reasonDatabase");		//Dexie initializes a new indexedDB named "reasonDatabase"
	App.db.version(1).stores({reasons: "++id, reasonText, date"});		//Dexie initializes a collection (or table) named 'reasons'
	App.db.open();		//Dexie opens the DB for business!

	App.Reasons = new App.Collections.Reasons();

	App.db.reasons.each(function(reason) {		//Dexie cycles through the reasons collection and adds each object to my Reasons collection
		App.Reasons.add({
			id: reason.id,
			reasonText: reason.reasonText,
			date: reason.date
		});
	}).then(function() {		//Once the data has been retrieved and put into models, the following code is run

		App.ReasonsView = new App.Views.Reasons();
		App.ReasonsView.render();

		App.AddReasonView = new App.Views.AddReason();
		App.AddReasonView.render();

		App.Reasons.on({
			add: function (model) {
				model.sync('create', model, {dbCollection: 'reasons'});		//This calls Backbone.sync() to create a new DB entry
				App.ReasonsView.render();
			},
			remove: function (model) {
				model.sync('delete', model, {dbCollection: 'reasons'});		//This calls Backbone.sync() to delete a DB entry
				App.ReasonsView.render();
			},
			change: function (model) {
				model.sync('update', model, {dbCollection: 'reasons'});		//This calls Backbone.sync() to update a DB entry
				App.ReasonsView.render();
			}
		});

		if (App.Reasons.length === 0) {
			App.Reasons.add([
				{
					reasonText: "IndexedDB was specifically designed for storing large amounts of data on the client's computer.",
					date: new Date().getTime()
				},
				{
					reasonText: "Using the Dexie.js library it is very easy to access indexedDB's powerful API and all browser inconsistencies are abstracted away.",
					date: new Date().getTime()
				},
				{
					reasonText: "All data is stored in regular JavaScript objects, so no extra data manipulation is needed between Backbone and indexedDB.",
					date: new Date().getTime()
				},
				{
					reasonText: "IndexedDB allows you to build static collection (or 'table', if you like) structures, but will take any type of input including blobs!",
					date: new Date().getTime()
				},
				{
					reasonText: "The asynchronous nature of indexedDB allows you to do all your database work in the background without ever slowing down your application.",
					date: new Date().getTime()
				},
				{
					reasonText: "Dexie.js allows you to write DB calls which are very easily read and can be understood by anyone.",
					date: new Date().getTime()
				},
				{
					reasonText: "The client does not have to install anything special in order to use indexedDB and the data store will remain intact even if the client clears all history, cache, and even 'offline data'.",
					date: new Date().getTime()
				}
			]);
		}
	});
});
