get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :json # ensures content type of object returned is json

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  
  {cell: cell, color: color}.to_json   #Create and return a JSON object with the random cell and color 
end
