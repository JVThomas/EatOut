function NoteService($resource){
  
  var Note = $resource('http://localhost:3000/notes/:id',{id : '@id'}, {
    update:{
      method: 'PUT'
    }
  });
  return Note;
}

angular
  .module('app')
  .factory('NoteService', NoteService);