function EventIndexController(userEvents){
  var ctrl = this;
  ctrl.userEvents = userEvents;

  ctrl.test = function(){
    debugger;
  }
}

angular
  .module('app')
  .controller('EventIndexController',EventIndexController);