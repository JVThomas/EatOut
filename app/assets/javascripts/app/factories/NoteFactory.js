function NoteFactory($resource){
  
  var Note = $resource('https://eatoutapp.herokuapp.com/notes/:id',{id : '@id'}, {
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