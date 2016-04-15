class Event < ActiveRecord::Base
  has_one :note, dependent: :destroy
  belongs_to :user
  has_one :venue
end
