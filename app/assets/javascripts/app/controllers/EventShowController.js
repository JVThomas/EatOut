function EventShowController($state,$stateParams,$cookies,EventFactory,$timeout){

  var ctrl = this;
  ctrl.userId = JSON.parse($cookies.get('user')).id;
  ctrl.event = EventFactory.get({id: $stateParams.index, user_id: ctrl.userId});

  ctrl.deleteEvent = function(){
    ctrl.event.$delete({id: $stateParams.index, user_id: ctrl.userId});
    $timeout(function(){
      $state.go('home.events');
    }, 50); 
  }
}

angular
  .module('app')
  .controller('EventShowController', EventShowController);