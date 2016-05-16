function VenueFactory($resource){
  var Venue = $resource('http://localhost:3000/venues/:id', {id:'@id'},{'update':{method:'PUT'}});
  return Venue;
}

VenueFactory.$inject = [$resource];

angular
  .module('app')
  .factory('VenueFactory', VenueFactory);