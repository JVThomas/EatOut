class SimpleEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time
end
