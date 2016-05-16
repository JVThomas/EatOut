function venueSearch(FoursquareService, $rootScope){
  return{
    scope:{},
    controllerAs: 'venueSearchCtrl',
    templateUrl: 'events/directives/venueSearch.html',
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

venueSearch.$inject = ['FoursquareService', '$rootScope'];

angular
  .module('app')
  .directive('venueSearch', venueSearch);