function EventService($resource){

  var Event = $resource('http://localhost:3000/events/:eventId');

  var userEvents = $resource('http://localhost:3000/events');

  this.createEvent = function(eventObj){
    newEvent = new Event();
    newEvent.name = eventObj.name;
    newEvent.venue_id = eventObj.venue_id;
    newEvent.user_id = eventObj.user_id;
    newEvent.guests = eventObj.guests;
    newEvent.time = eventObj.time;
    newEvent.date = eventObj.date;
    return newEvent.$save();
  }

  this.getEvents = function(id){
    return userEvents.get({user_id:id},function(){});
  }

  this.getEvent = function (eventId,user_id,callback) {
    Event.get({eventId: eventId, user_id: user_id}, callback);
  };

  this.deleteEvent = function(eventId, userId){
    Event.get({eventId:eventId, user_id:userId}, function(event){
      event.$delete({eventId:eventId, user_id: userId});
    });
  }
}

angular
  .module('app')
  .service('EventService', EventService);