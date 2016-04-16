require 'pry'
class NotesController < ApplicationController
  def create
    @note = Note.create(note_params)
    render json: @note
  end

  private

  def note_params
    params.require(:note).permit(:content, :event_id)
  end
end
