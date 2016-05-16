function FoursquareService($http){
  
  this.getVenues = function(input){
    return $http.get('http://localhost:3000/venues/search.json', 
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