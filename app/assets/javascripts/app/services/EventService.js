function EventService($resource){

  var Event = $resource('http://localhost:3000/events/:id',{id:'@id'},{
    'update': {method: "PUT"}
  });

  return Event;
}

angular
  .module('app')
  .factory('EventService', EventService);