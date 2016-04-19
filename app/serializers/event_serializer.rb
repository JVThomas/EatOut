class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :guests, :user_id
  has_one :note
  has_one :venue
end
