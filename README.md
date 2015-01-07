Backbone.js-with-IndexedDB-and-Dexie.js-Demo
============================================

This is a demo application to show how Backbone.js can work seamlessly with IndexedDB and Dexie.js.

###Why?

I wanted to see what it would take to build a completely client-side app with a persistent data store using only JavaScript, HTML and the browser. What I found is that it is much easier than I ever imagined!

###indexedDB

[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) has been around since about 2010 but has only recently become a viable option for web developers. As with most new web technologies, the browsers had to catch up. IndexedDB is designed to store large amounts of data and comes with all major desktop browsers today. There is no background server or plugins necessary to use it! The syntax is quite ugly and does not make for readable code. But that's where a good abstraction layer comes in!

###Dexie.js

[Dexie.js](https://github.com/dfahlander/Dexie.js/wiki/Dexie.js) is a very well-written JavaScript library for using indexedDB. With Dexie.js, you the developer, do not need to worry about browser inconsistencies because the library smooths over all those and provides you a simple and readable API for interacting with the DB.

###Backbone.js

I had heard of Backbone's [sync method](http://backbonejs.org/#Sync) and wanted to write a custom implementation which would sync data with indexedDB rather than a remote server. I found that it was much easier than I expected.

###How?

Let me briefly explain how I made this work. If you look at the code, you'll notice that I did not do any data validation or error handling. In a production app, you would obviously want those, but for this demo I just wanted to see how I could make it work.

###1. Open the DB

Opening a DB using Dexie is simple. For this app, I opened a DB called `reasonDatabase`, set its version to `1`, defined its structure, then told it to open!

```
App.db = new Dexie("reasonDatabase");
App.db.version(1).stores({reasons: "++id, reasonText, date"});
App.db.open()
```

###2. Configure Backbone.sync()
Backbone's defaul sync method takes three methods:

1. method - This is a string containing a CRUD (create, read, update, delete) method.
2. model - This is an object containing the model being acted upon.
3. options - This is an object containing any extra parameters or callback functions.

This custom sync method takes those same parameters and and syncs the data to the appropriate collection in indexedDB database.

```
Backbone.sync = function(method, model, options) {
	switch(method) {
		case 'create':
      			App.db[options.dbCollection].add(_.omit(model.attributes, 'id')).then(function(key) {
				model.set('id', key);
			});
			break;
		case 'update':
			App.db[options.dbCollection].update(model.get('id'), _.omit(model.attributes, 'id'));
			break;
		case 'delete':
			App.db[options.dbCollection].delete(model.id);
			break;
	}
};
```
More details can be found in the code comments in main.js

###3. Set Event Handlers

I have a collection named `Reasons` and I set it to sync any time a model is added, changed, or removed.

```
App.Reasons.on({
	add: function (model) {
		model.sync('create', model, {dbCollection: 'reasons'});
		...
	},
	remove: function (model) {
		model.sync('delete', model, {dbCollection: 'reasons'});
		...
	},
	change: function (model) {
		model.sync('update', model, {dbCollection: 'reasons'});
		...
	}
});
```
