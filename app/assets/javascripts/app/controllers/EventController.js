function EventController($filter,FoursquareService,$cookies){
  debugger;
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
      location: venue.location.formattedAddress,
      contact: venue.contact.formattedPhone,
      visits: venue.stats.usersCount
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

  ctrl.submitEvent = function(){
    
  }

}

angular
  .module('app')
  .controller('EventController', EventController);