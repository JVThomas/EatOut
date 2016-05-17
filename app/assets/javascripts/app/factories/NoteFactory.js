function NoteFactory($resource){
  
  var Note = $resource('http://eatoutapp.herokuapp.com/notes/:id',{id : '@id'}, {
    update:{
      method: 'PUT'
    }
  });
  return Note;
}

NoteFactory.$inject = ['$resource'];

angular
  .module('app')
  .factory('NoteFactory', NoteFactory);