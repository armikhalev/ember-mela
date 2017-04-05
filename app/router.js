import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('koyla', {path: '/static/leyfaw_say/'});
  this.route('latay', {path: '/static/leyfaw_say/latay'});
});

export default Router;
