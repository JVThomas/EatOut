require 'pry'
class VenuesController < ApplicationController
before_action :set_user
  
  def create
    @venue = Venue.find_or_create_by(name: venue_params[:name], location: venue_params[:location], contact: venue_params[:contact])
    render json: @venue
  end

  private
    def venue_params
      params.require(:venue).permit(:name,:location,:contact)
    end
end
