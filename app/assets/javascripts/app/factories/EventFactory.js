function EventFactory($resource){

  var Event = $resource('https://eatoutapp.herokuapp.com/events/:id',{id:'@id'},{
    'update': {method: "PUT"}
  });

  return Event;
}

EventFactory.$inject = ['$resource'];

angular
  .module('app')
  .factory('EventFactory', EventFactory);