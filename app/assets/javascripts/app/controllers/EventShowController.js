function EventShowController($state,$stateParams,$cookies,EventFactory){

  var ctrl = this;
  ctrl.userId = JSON.parse($cookies.get('user')).id;
  ctrl.event = EventFactory.get({id: $stateParams.index, user_id: ctrl.userId});

  ctrl.deleteEvent = function(){
    ctrl.event.$delete({id: $stateParams.index, user_id: ctrl.userId}).then(function(deletedEvent){
      $state.go('home.events');
    });
  }
}

EventShowController.$inject = ['$state','$stateParams', '$cookies','EventFactory'];

angular
  .module('app')
  .controller('EventShowController', EventShowController);