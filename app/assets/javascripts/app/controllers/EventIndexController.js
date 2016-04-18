function EventIndexController(userEvents){
  var ctrl = this;
  ctrl.userEvents = userEvents;
}

angular
  .module('app')
  .controller('EventIndexController',EventIndexController);