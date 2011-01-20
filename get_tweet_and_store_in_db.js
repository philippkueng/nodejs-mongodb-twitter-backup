var mongo = require('mongodb'),
	db = new mongo.Db('webtuesday', new mongo.Server('localhost', 27017, {}), {});
	
var TwitterNode = require('twitter-node').TwitterNode,
	sys = require('sys');

db.open(function()
{
	//db.collection.ensureIndex({'user.id':1});
	db.collection('wt', function(err, collection){
		
		var tn = new TwitterNode({
			user: 'username',
			password: 'password',
			track: ['webtuesday']
		});
		var counter = 475000;
		tn.addListener('tweet', function(status){			
			
			//sys.puts(counter + ' - ' + status.user.screen_name + ' - ' + status.user.id);
			sys.puts(counter);
			collection.insert(status, function(){
				counter++;
			});
			//collection.ensureIndex({'user.id':1});
		}).stream();
	});
});