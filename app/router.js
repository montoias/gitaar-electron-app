import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('start');
  this.route('edit-song', {path: '/edit-song/:url'});
  this.route('resolve-conflicts', {path: '/resolve-conflicts/:url'});
});

export default Router;
