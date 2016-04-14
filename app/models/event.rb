class Event < ActiveRecord::Base
  has_many :notes, dependent: :destroy
  belongs_to :user
  has_one :venue
end
