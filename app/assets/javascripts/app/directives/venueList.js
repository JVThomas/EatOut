function venueList($rootScope,$filter){
  return{
    scope:{},
    controllerAs: 'venueList',
    templateUrl:'app/views/events/directives/venueList.html',
    controller: function($rootScope,$filter){
      var ctrl = this;
      ctrl.resultsFoundBool = true;
      
      ctrl.refilter = function () {
        ctrl.filteredList = $filter('filter')(ctrl.searchResults, ctrl.searchTerm);
      };
      
      $rootScope.$on('venueSearch', function(event, results){
        ctrl.searchResults = results;
        ctrl.filteredList = ctrl.searchResults;
        
        (ctrl.searchResults === undefined || ctrl.searchResults.length === 0) ? ctrl.resultsFoundBool = false :  ctrl.resultsFoundBool = true; 
      });
    }
  }
}

angular
  .module('app')
  .directive('venueList', venueList);