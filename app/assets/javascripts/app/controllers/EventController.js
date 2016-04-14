function EventController($filter, FoursquareService){
  var ctrl = this;

  ctrl.searchTerm = '';

  ctrl.findVenues = function(){
    FoursquareService.getVenues(ctrl.params).then(function(resp){
      ctrl.searchResults = resp['data']['response']['venues'];
      ctrl.filteredList = ctrl.searchResults;
    });
  }

  ctrl.refilter = function () {
    ctrl.filteredList = $filter('filter')(ctrl.searchResults, ctrl.searchTerm);
    debugger;
  };

}

angular
  .module('app')
  .controller('EventController', EventController);