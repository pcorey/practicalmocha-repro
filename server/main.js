import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Bar = new Mongo.Collection("bar");

Meteor.startup(() => {
  // code to run on server at startup
});
