class EventsController < ApplicationController
  
  before_action :set_user, only:[:index,:show]
  before_action :set_event, only:[:show, :destroy, :update]
  
  def index
    @events = Event.where(user_id: params[:user_id])
    render json: @events, each_serializer: SimpleEventSerializer
  end
  
  def create
    @event = Event.create(event_params)
    render json: @event
  end

  def show
    render json: @event
  end

  def destroy
    @event.delete
    render json: @event
  end

  def update
    @event.update(event_params)
    render json: @event
  end

  private

  def event_params
    params.require(:event).permit(:name, :date, :time, :guests, :user_id, :venue_id)
  end

  def set_event
    @event = Event.find_by(id: params[:id], user_id: params[:user_id]);
  end

end
