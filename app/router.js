import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('koyla', {path: '/'}, function() {
    this.route('english', {path: '/koyla/:word'});
  });
  this.route('latay');
  this.route('word', {path: '/words'});
});

export default Router;
