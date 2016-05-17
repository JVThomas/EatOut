function EventFactory($resource){

  var Event = $resource('http://localhost:3000/events/:id',{id:'@id'},{
    'update': {method: "PUT"}
  });

  return Event;
}

EventFactory.$inject = ['$resource'];

angular
  .module('app')
  .factory('EventFactory', EventFactory);