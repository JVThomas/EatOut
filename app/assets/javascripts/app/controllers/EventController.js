function EventController($filter,$cookies, $state, $stateParams, EventService, VenueService, NoteService,$rootScope,$scope){
  var ctrl = this;
  ctrl.activePanel = false;
  ctrl.userEvent = {};
  ctrl.searchTerm = '';

  ctrl.resetVenue = function(){
    ctrl.userEvent.venue = {};
    ctrl.panelActivate();
  }

  ctrl.panelActivate = function(){
    ctrl.activePanel = !ctrl.activePanel;
  }

  ctrl.createEvent = function(){ //couldn't get accepts_nested_arguments_for to work with angular data submission, had to resort to this
    ctrl.userEvent.user_id = JSON.parse($cookies.get('user')).id;
    VenueService.createVenue(ctrl.userEvent.venue).then(function(venueResp){
      ctrl.userEvent.venue_id = venueResp.venue.id;
      EventService.createEvent(ctrl.userEvent).then(function(eventResp){
        NoteService.createNote(ctrl.userEvent.note, eventResp.event.id).then(function(noteResp){
        });
      });
      $state.go('home.events');
    });
  }

  $rootScope.$on('selectVenue', function(event,venue){
    ctrl.userEvent.venue = {
      name: venue.name,
      location: venue.location.formattedAddress.join('\n'),
      contact: venue.contact.formattedPhone,
    };
    ctrl.panelActivate();
  });
  
}

angular
  .module('app')
  .controller('EventController', EventController);