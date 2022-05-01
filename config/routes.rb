Rails.application.routes.draw do
  devise_scope :user do
    # Redirects signing out users back to sign-in
    get 'users', to: 'devise/sessions#new'
  end
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'type#index'
  get '/calendar', to: 'calendar#index'
  get '/calendar/week', to: 'calendar#week'
  get '/calendar/month', to: 'calendar#month'
  get '/calendar/day', to: 'calendar#day'

  get '/about', to: 'about#index'
  get '/contact', to: 'contact#index'
end
