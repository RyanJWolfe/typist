Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'calendar#index'
  get '/calendar/week', to: 'calendar#week'
  get '/calendar/month', to: 'calendar#month'
  get '/calendar/day', to: 'calendar#day'
end
