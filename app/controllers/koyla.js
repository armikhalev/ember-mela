import Ember from 'ember';
import { ensurePromise } from '../utils/ensurePromise';

export default Ember.Controller.extend({

  langTranslateFrom: 'english',
  langTranslateTo: 'mela',

  actions: {
    filterByWord(param) {
      // Check the first letter of the input param and get the data from serever. Don't reload data from server anymore.
      if (param !== '' && param.length < 2) {
        return this.get('store').findAll(param + '-word',{ backgroundReload: false });
      }
      // When input param is more than one letter, peeek all the words from Ember store with first letter as in input param.
      // Check second and all the following letters to be equal to those strings that in Ember store.
      else if (param !== '' && param.length >= 2) {

          let search = this.store.peekAll(param.charAt(0) + "-word");
          
          let filtered = search.filter(function(i) {
            return i.get("word").toLowerCase().indexOf(param.toLowerCase()) !== -1;
          });
          // store.peekAll() returns Ember.enumerable class object, not a promise. Make it to be promise.
          return ensurePromise(filtered);
      } 
      else {
        return this.get('store').findAll('a-word',{ backgroundReload: false });
      }
    },
    changeLanguage_onClick () {
      this.setProperties({langTranslateFrom: this.langTranslateFrom === 'english' ? 'mela' : 'english'});
      this.setProperties({langTranslateTo: this.langTranslateFrom === 'english' ? 'mela' : 'english'});
    }
  }
});
