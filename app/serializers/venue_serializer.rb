class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :contact
end
