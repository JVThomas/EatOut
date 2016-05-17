function FoursquareService($http){
  
  this.getVenues = function(input){
    return $http.get('http://eatoutapp.herokuapp.com/venues/search.json', 
      {params:
        {near: input.near, query: input.query}
      }
    );
  }
}

FoursquareService.$inject = ['$http'];

angular
  .module('app')
  .service('FoursquareService',FoursquareService);