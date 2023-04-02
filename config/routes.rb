Rails.application.routes.draw do
  resources :therapists do
    resources :payments, only: [:create]
  end
  
 
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  resources :clients do
    resources :journals
  end

  resources :casenotes
  
  root 'root#index'
end
