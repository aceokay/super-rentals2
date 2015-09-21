import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.store.findAll('rental');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});

  var cities = [{
    id:1,
    name:"Vienna",
    attraction:"Lisa's appartment",
    image:"http://cdn.decoist.com/wp-content/uploads/2012/05/most-stunning-penthouses-in-Australia.jpg"
  }, {
    id:2,
    name:"Portland",
    attraction:"Burnside Bridge",
    image:"https://c2.staticflickr.com/4/3224/2663909610_9ffb33a085.jpg"
  }];
