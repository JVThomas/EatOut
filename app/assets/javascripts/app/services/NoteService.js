function NoteService($resource){
  var Note = $resource('http://localhost:3000/notes/:noteId',{noteId : '@noteId'}, {
    update:{
      method: 'PUT'
    }
  });

  this.createNote = function(noteObj,eventId){
    note = new Note;
    note.content = noteObj.content;
    note.event_id = eventId; 
    return note.$save();
  }

  this.updateNote = function (noteObj){
    Note.get({noteId: noteObj.id}, function(note){
      Note.update({
        noteId: noteObj.id,
        content: noteObj.content
      });
    });
  }
}

angular
  .module('app')
  .service('NoteService', NoteService);