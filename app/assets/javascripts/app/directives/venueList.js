function venueList($rootScope,$filter){
  return{
    controllerAs: 'venueList',
    templateUrl:'app/views/events/directives/venueList.html',
    controller: function($rootScope,$filter){
      var ctrl = this;

      ctrl.refilter = function () {
        ctrl.filteredList = $filter('filter')(ctrl.searchResults, ctrl.searchTerm);
      };
      
      $rootScope.$on('venueSearch', function(event, results){
        debugger;
        ctrl.searchResults = results;
        ctrl.filteredList = ctrl.searchResults;
      });
    }
  }

}

angular
  .module('app')
  .directive('venueList', venueList);