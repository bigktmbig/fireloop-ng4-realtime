// 'use strict';

// module.exports = function(app) {

// 	// //auto migrate data to db
// 	// var ds = app.datasources.db;
// 	// var models = ['AccessToken', 'ACL', 'Role', 'RoleMapping', 'BigUser', 'Todo', 'Note'];
// 	// console.log('Migrating...');
// 	// ds.automigrate(models, function(err) {
// 	// 	if (err) throw err;
// 	// 	ds.disconnect();
// 	// 	process.exit();
// 	// });


// 	/* create users ===========================================================================================================*/
// 	var BigUser = app.models.BigUser;
// 	var Role = app.models.Role;
// 	var RoleMapping = app.models.RoleMapping;

// 	//admin
// 	BigUser.create({
// 	    userId: 1,          //edit here
// 	    username: 'big',      //edit here
// 	    email: 'big@big.com',       //edit here
// 	    password: 'bigbig123',      //edit here
// 	    emailVerified: true
// 	}, 
// 	function (err, user) {
// 		Role.updateOrCreate({
// 	        name: 'big'   //edit here
// 	    }, {
// 	        name: 'big'   //edit here
// 	    }, 
// 	    function (err, role) {
// 	    	if (err) throw err;

// 	    	console.log('Created role:', role);

// 	        //make user an admin
// 	        role.principals.create({
// 	        	principalType: RoleMapping.USER,
// 	        	principalId: user.id
// 	        },function (err, principal) {
// 	        	if (err) throw err;
// 	        	console.log('Principal:', principal);
// 	        });
// 	    });
// 	});

// 	BigUser.create({
// 	    userId: 1,          //edit here
// 	    username: 'admin',      //edit here
// 	    email: 'admin@admin.com',       //edit here
// 	    password: '11111111',      //edit here
// 	    emailVerified: true
// 	}, 
// 	function (err, user) {
// 		Role.updateOrCreate({
// 	        name: 'admin'   //edit here
// 	    }, {
// 	        name: 'admin'   //edit here
// 	    }, 
// 	    function (err, role) {
// 	    	if (err) throw err;

// 	    	console.log('Created role:', role);

// 	        //make user an admin
// 	        role.principals.create({
// 	        	principalType: RoleMapping.USER,
// 	        	principalId: user.id
// 	        },function (err, principal) {
// 	        	if (err) throw err;
// 	        	console.log('Principal:', principal);
// 	        });
// 	    });
// 	});

// 	//manager
// 	BigUser.create({
// 	    userId: 2,          //edit here
// 	    username: 'manager',      //edit here
// 	    email: 'manager@manager.com',       //edit here
// 	    password: '11111111',      //edit here
// 	    emailVerified: true
// 	}, 
// 	function (err, user) {
// 		Role.updateOrCreate({
// 	        name: 'manager'   //edit here
// 	    }, {
// 	        name: 'manager'   //edit here
// 	    }, 
// 	    function (err, role) {
// 	    	if (err) throw err;

// 	    	console.log('Created role:', role);

// 	        //make user an manager
// 	        role.principals.create({
// 	        	principalType: RoleMapping.USER,
// 	        	principalId: user.id
// 	        },function (err, principal) {
// 	        	if (err) throw err;
// 	        	console.log('Principal:', principal);
// 	        });
// 	    });

// 	});

// 	//member
// 	BigUser.create({
// 	    userId: 2,          //edit here
// 	    username: 'member',      //edit here
// 	    email: 'member@member.com',       //edit here
// 	    password: '11111111',      //edit here
// 	    emailVerified: true
// 	}, 
// 	function (err, user) {
// 		Role.updateOrCreate({
// 	        name: 'member'   //edit here
// 	    }, {
// 	        name: 'member'   //edit here
// 	    }, 
// 	    function (err, role) {
// 	    	if (err) throw err;

// 	    	console.log('Created role:', role);

// 	        //make user an member
// 	        role.principals.create({
// 	        	principalType: RoleMapping.USER,
// 	        	principalId: user.id
// 	        },function (err, principal) {
// 	        	if (err) throw err;
// 	        	console.log('Principal:', principal);
// 	        });
// 	    });

// 	});

// 	/*create todos ============================================================================================================*/

// 	// function createDefaultTodos() {

// 	// 	console.log('Creating todos');

// 		var Todo = app.models.Todo;

// 		var todos = [{
// 			text: "string1"
// 		},{
// 			text: "string2"
// 		},{
// 			text: "string3"
// 		},{
// 			text: "string4"
// 		},{
// 			text: "string5"
// 		}];

// 		Todo.create(todos, function(err, createdTodo, created) {
// 			if (err) {
// 				console.error('error running create(todos)', err);
// 			}
// 			createdTodo.forEach(function(crTodo) {
// 				console.log('{'+crTodo.id+', '+crTodo.text+'}\n');
// 			});
// 		});
// 	// }

// 	// createDefaultTodos();
// };
