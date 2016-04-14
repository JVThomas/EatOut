class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :guests
  has_many :notes
  has_one :venue
end
