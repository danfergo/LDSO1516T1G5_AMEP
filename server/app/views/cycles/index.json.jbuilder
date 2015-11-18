json.array!(@cycles) do |cycle|
  json.extract! cycle, :id, :start, :end
  json.url cycle_url(cycle, format: :json)
end
