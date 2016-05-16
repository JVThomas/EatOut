function EventIndexController(userEvents){
  var ctrl = this;
  ctrl.userEvents = userEvents;
}

EventIndexController.$inject = ['userEvents'];

angular
  .module('app')
  .controller('EventIndexController',EventIndexController);