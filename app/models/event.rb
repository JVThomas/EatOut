class Event < ActiveRecord::Base
  has_one :note, dependent: :destroy
  belongs_to :user
  belongs_to :venue
end
