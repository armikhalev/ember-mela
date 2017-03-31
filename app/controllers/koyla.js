import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByWord(param) {

      if (param !== '' && param.length < 2) {
        if (param === 'a') {
          return this.get('store').findAll('a-word',{ backgroundReload: false });
        }
        else if (param === 'd') {
          return this.get('store').findAll('d-word',{ backgroundReload: false });
        }
        else if (param === 'f') {
          return this.get('store').findAll('f-word',{ backgroundReload: false });
        }
      }       
      else if (param !== '' && param.length >= 2) {
          let search = "";

          if (param.charAt(0) === "a") {
              search = this.store.filter('a-word', function(record){
                return record.get('word') == param;
              }) 
          }   
          else if (param.charAt(0) === "d") {
              search = this.store.filter('d-word', function(record){
                return record.get('word') == param;
              }) 
          }   
          else if (param.charAt(0) === "f") {
              search = this.store.filter('f-word', function(record){
                return record.get('word') == param;
              }) 
          }  

        return search;
      } 
      else {
        return this.get('store').findAll('word',{ backgroundReload: false });
      }
    }
  }
});
