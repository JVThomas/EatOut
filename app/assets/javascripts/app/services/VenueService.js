function VenueService($resource){
  var Venue = $resource('http://localhost:3000/venues');

  this.createVenue = function(venueObj){
    venue = new Venue;
    venue.name = venueObj.name;
    venue.location = venueObj.location;
    venue.contact = venueObj.contact;
    return venue.$save();
  }

}

angular
  .module('app')
  .service('VenueService', VenueService);