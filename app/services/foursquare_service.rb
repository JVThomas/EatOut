class FoursquareService
  def foursquare(city,query)
    @resp = Faraday.get 'https://api.foursquare.com/v2/venues/search' do |req|
      req.params['client_id'] = ENV['FOURSQUARE_CLIENT']
      req.params['client_secret'] = ENV['FOURSQUARE_SECRET'] 
      req.params['v'] = '20160201'
      req.params['near'] = city
      req.params['query'] = query
    end
    @result = JSON.parse(@resp.body)
  end
end