import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Koyla',
    model() {
        return this.store.findAll('word');
    }
});
