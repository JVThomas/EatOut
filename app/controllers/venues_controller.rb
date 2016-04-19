class VenuesController < ApplicationController
before_action :set_user
  
  def create
    @venue = Venue.create(venue_params)
    render json: @venue
  end

  def show
    @venue = Venue.find(params[:id])
    render json: @venue
  end

  def update
    @venue = Venue.find_or_create_by(venue_params)
    render json: @venue
  end

  private
    def venue_params
      params.require(:venue).permit(:name,:location,:contact)
    end
end
