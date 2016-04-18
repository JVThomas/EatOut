function EventShowController($state,$stateParams,$cookies,EventService,$timeout){
  var ctrl = this;
  EventService.getEvent($stateParams.index, JSON.parse($cookies.get('user')).id, function (event) {
    ctrl.event = event.event;
  });

  ctrl.deleteEvent = function(){
    EventService.deleteEvent(ctrl.event.id, JSON.parse($cookies.get('user')).id);
    $timeout(function(){
      $state.go('^.events');
    }, 50);
  }
}

angular
  .module('app')
  .controller('EventShowController', EventShowController);