class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :guests
  has_one :note
  has_one :venue
end
