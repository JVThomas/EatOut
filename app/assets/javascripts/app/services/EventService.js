function EventService($resource){

  var Event = $resource('http://localhost:3000/events/:eventId',{eventId:'@eventId'},{
    'update': {method: "PUT"}
  });

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

  this.updateEvent = function(userId, eventObj){
    Event.get({eventId: eventObj.id, user_id: userId}, function(resp){
      resp.eventId = eventObj.id,
      resp.user_id = userId,
      resp.event.date = eventObj.date,
      resp.event.time = eventObj.time,
      resp.event.name = eventObj.name,
      resp.event.guests = eventObj.guests
      resp.$update();
    });
  }
}

angular
  .module('app')
  .service('EventService', EventService);