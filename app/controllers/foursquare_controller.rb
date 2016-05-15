class FoursquareController < ApplicationController
  def search
    foursquare = FoursquareService.new
    @resp = foursquare.foursquare(params[:near],params[:query])
    render json: @resp
  end
end