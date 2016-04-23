class NotesController < ApplicationController

  before_action :set_note, only:[:show,:update, :delete]
  
  def create
    @note = Note.create(note_params)
    render json: @note
  end

  def update
    @note.update(note_params)
    render json: @note
  end

  def show
    render json: @note
  end

  def destroy
    Note.destroy(params[:id])
  end

  private

  def note_params
    params.require(:note).permit(:content, :event_id)
  end

  def set_note
    @note = Note.find(params[:id])
  end
end
