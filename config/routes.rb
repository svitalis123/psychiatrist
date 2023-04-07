Rails.application.routes.draw do
  resources :therapists do
    resources :payments, only: [:create]
  end
  
 
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  resources :clients do
    resources :journals
  end

  post '/login', to: 'auth#login'
  get '/user_is_authed', to: 'auth#user_is_authed'

  resources :casenotes
  
  root 'root#index'
end
