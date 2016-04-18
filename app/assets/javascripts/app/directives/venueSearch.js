function venueSearch(FoursquareService, $rootScope){
  return{
    controllerAs: 'venueSearchCtrl',
    templateUrl: 'app/views/events/directives/venueSearch.html',
    controller: function(FoursquareService,$rootScope){
      var ctrl = this;
      ctrl.findVenues = function(){
        FoursquareService.getVenues(ctrl.params).then(function(resp){
          ctrl.searchResults = resp['data']['response']['venues'];
          $rootScope.$broadcast('venueSearch', ctrl.searchResults);
        });
      }
    }
  }
}

angular
  .module('app')
  .directive('venueSearch', venueSearch);