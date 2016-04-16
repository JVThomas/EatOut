function EventController($filter,FoursquareService,$cookies, $state, $stateParams, EventService, VenueService, NoteService){
  var ctrl = this;
  ctrl.activePanel = false;
  ctrl.userEvent = {};
  ctrl.searchTerm = '';

  ctrl.findVenues = function(){
    FoursquareService.getVenues(ctrl.params).then(function(resp){
      ctrl.searchResults = resp['data']['response']['venues'];
      ctrl.filteredList = ctrl.searchResults;
    });
  }

  ctrl.refilter = function () {
    ctrl.filteredList = $filter('filter')(ctrl.searchResults, ctrl.searchTerm);
  };

  ctrl.selectVenue = function(venue){
    ctrl.userEvent.venue = {
      name: venue.name,
      location: venue.location.formattedAddress.join('\n'),
      contact: venue.contact.formattedPhone,
    };
    ctrl.panelActivate();
  }

  ctrl.resetVenue = function(){
    ctrl.userEvent.venue = {};
    ctrl.panelActivate();
  }

  ctrl.panelActivate = function(){
    ctrl.activePanel = !ctrl.activePanel;
  }

  ctrl.submitEvent = function(){ //couldn't get accepts_nested_arguments_for to work with angular data submission, had to resort to this
    ctrl.userEvent.user_id = JSON.parse($cookies.get('user')).id;
    VenueService.createVenue(ctrl.userEvent.venue).then(function(venueResp){
      ctrl.userEvent.venue_id = venueResp.venue.id;
      EventService.createEvent(ctrl.userEvent).then(function(eventResp){
        NoteService.createNote(ctrl.userEvent.note, eventResp.event.id).then(function(noteResp){
          debugger;
        });
      });
      $state.go('home.events');
    });
  }
}

angular
  .module('app')
  .controller('EventController', EventController);