function VenueService($resource){
  var Venue = $resource('http://localhost:3000/venues/:id', {id:'@id'},{'update':{method:'PUT'}});
  return Venue;
}

angular
  .module('app')
  .factory('VenueService', VenueService);