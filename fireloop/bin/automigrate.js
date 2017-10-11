require('events').EventEmitter.prototype._maxListeners = 100;
var path = require('path');


var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
var models = ['AccessToken', 'ACL', 'Role', 'RoleMapping', 'BigUser', 'Todo', 'Note',
'Customer', 'Category', 'Supplier', 'Default', 'Pbs', 'Return', 'Service', 'ServiceStore', 
'ServiceTmp', 'Store', 'Point', 'Repoint', 'RepointDefault', 'Log', 'House', 'Room'];
console.log('Migrating...');
ds.automigrate(models, function(err) {
    if (err) throw err;
    ds.disconnect();
    process.exit();
})