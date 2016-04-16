function NoteService($resource){
  var Note = $resource('http://localhost:3000/notes');

  this.createNote = function(noteObj,eventId){
    note = new Note;
    note.content = noteObj.content;
    note.event_id = eventId; 
    return note.$save();
  }
}

angular
  .module('app')
  .service('NoteService', NoteService);