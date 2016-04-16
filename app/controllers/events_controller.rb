require 'pry'
class EventsController < ApplicationController
  before_action :set_user, only:[:index,:show]
  def index
    @events = Event.where(user_id: params[:user_id])
    render json: @events
  end
  
  def create
    @event = Event.create(event_params)
    render json: @event
  end

  def show
    binding.pry
    @event = Event.find_by(id:params[:event_id], user_id: params[:user_id])
    render json: @event
  end

  private

  def event_params
    params.require(:event).permit(:name, :date, :time, :guests, :user_id, :venue_id)
  end
end
