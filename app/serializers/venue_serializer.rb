class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :contact
end
