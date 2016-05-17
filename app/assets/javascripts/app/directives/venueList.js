function venueList($rootScope,$filter){
  return{
    scope:{},
    controllerAs: 'venueList',
    templateUrl:'events/directives/venueList.html',
    controller: ['$rootScope','$filter',function($rootScope,$filter){
      var ctrl = this;
      ctrl.reverse = true;
      ctrl.resultsFoundBool = true;
      
      ctrl.refilter = function () {
        ctrl.filteredList = $filter('filter')(ctrl.searchResults, ctrl.searchTerm);
      };
      
      var unbindSearch = $rootScope.$on('venueSearch', function(event, results){
        ctrl.searchResults = results;
        ctrl.filteredList = ctrl.searchResults;
        
        (ctrl.searchResults === undefined || ctrl.searchResults.length === 0) ? ctrl.resultsFoundBool = false :  ctrl.resultsFoundBool = true; 
      });
    }],
    link: function(scope, elem, attr, ctrl){
      scope.$on("destroy", function(){
        ctrl.unbindSearch();
      });
    }
  }

  venueList.$inject = ['$rootScope', '$filter'];
}

angular
  .module('app')
  .directive('venueList', venueList);