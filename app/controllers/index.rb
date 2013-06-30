get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.

  #if user didn't send number we can create one
  value = params[:value] ? params[:value].to_i : nil
  roll = value ? Roll.create({ value: value }) : Roll.create

  if request.xhr?
    # in this case JS already sent number through URL
    puts "Params: #{params}"
    content_type :json
    # @roll_value = params[:value]
    roll.to_json # send it back as JSON
    # I could also just send back roll.value

  else
    # set instance var, if nil then create one    
    
    erb :index  
  end

end
