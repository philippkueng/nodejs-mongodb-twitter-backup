# nodejs-mongodb-twitter-backup

it's a very basic node.js script which uses the [twitter-node](https://github.com/technoweenie/twitter-node) and [mongodb](https://github.com/christkv/node-mongodb-native) packet.

## step 1 - install [node.js](http://nodejs.org)

clone [git://github.com/ry/node.git](git://github.com/ry/node.git) and install it with the commands below. 
	$ ./configure
	$ make 
	$ make install

## step 2 - install [mongoDB](http://www.mongodb.org)

download the mongoDB binaries from [here](http://www.mongodb.org/downloads)

## step 3 - install npm (node packet manager)

head over [npmjs.org](http://npmjs.org) for instructions on how to install npm

## step 4 - install packets twitter-node and mongodb

	$ npm install twitter-node
	$ npm install mongodb

## step 5

	$ git clone git://github.com/philippkueng/nodejs-mongodb-twitter-backup.git

Then start the mongoDB database by typing `mongod`
After that start the node.js server with the script by typing node `get_tweet_and_store_it_in_db.js`

## while / after running the script

start the mongoDB shell with `mongo`
you then can do a find query with `db.wt.find({'user.screen_name','screen_name_im_looking_for'})`

you'll find more queries and examples in the [mongoDB documentation](http://www.mongodb.org/display/DOCS/Home).