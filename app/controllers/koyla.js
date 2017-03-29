import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByWord(param) {
      if (param !== '') {
        return this.get('store').query('word', { city: param });
      } else {
        return this.get('store').findAll('word');
      }
    }
  }
});
