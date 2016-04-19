function EventController($filter,$cookies, $state, $stateParams, EventFactory, VenueFactory, NoteFactory,$rootScope, $timeout){
  
  var ctrl = this;
  ctrl.user_id = JSON.parse($cookies.get('user')).id;
  ctrl.searchTerm = '';

  if($stateParams.index === undefined){
    ctrl.activePanel = false;
    ctrl.userEvent = new EventFactory();
    ctrl.venue = new VenueFactory();
    ctrl.note = new NoteFactory();
  }
  else{
    ctrl.activePanel = true;
    ctrl.userEvent = EventFactory.get({id:$stateParams.index, user_id: ctrl.user_id}, function(userEvent){
      ctrl.venue = VenueFactory.get({id: ctrl.userEvent.venue.id}, function(venue){
        ctrl.note = NoteFactory.get({id: ctrl.userEvent.note.id});
      });
    });
  }

  ctrl.resetVenue = function(){
    ctrl.userEvent.venue = {};
    ctrl.panelActivate();
  }

  ctrl.panelActivate = function(){
    ctrl.activePanel = !ctrl.activePanel;
  }

  ctrl.createEvent = function(){ //couldn't get accepts_nested_arguments_for to work with angular data submission, had to resort to this
    ctrl.venue.$save().then(function(venue){
      ctrl.userEvent.user_id = ctrl.user_id
      ctrl.userEvent.venue_id = venue.id;
      ctrl.userEvent.$save().then(function(userEvent){
        ctrl.note.event_id = userEvent.id;
        ctrl.note.$save().then(function(note){
          $state.go('home.events');
        });
      });
    });
  }

  ctrl.editEvent = function(){
    ctrl.venue.$update().then(function(venue){
      ctrl.userEvent.venue_id = venue.id;
      ctrl.userEvent.$update().then(function(userEvent){
        ctrl.note.$update().then(function(note){
          $state.go('home.showEvent', {index:$stateParams.index});
        });
      });
    });
  }

  $rootScope.$on('selectVenue', function(event,venue){
    ctrl.venue.name = venue.name;
    ctrl.venue.location = venue.location.formattedAddress.join('\n');
    ctrl.venue.contact = venue.contact.formattedPhone;
    ctrl.panelActivate();
  });
  
}

angular
  .module('app')
  .controller('EventController', EventController);