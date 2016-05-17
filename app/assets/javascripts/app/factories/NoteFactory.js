function NoteFactory($resource){
  
  var Note = $resource('http://localhost:3000/notes/:id',{id : '@id'}, {
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