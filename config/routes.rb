WeddingSite::Application.routes.draw do
  
  post '/register' => 'registrations#create'
  get '/attendance' => 'registrations#index'

  # pass any remaining page id's in to the homepage
  get '/:detail' => 'static_pages#home'

  # the home page (root)
  root :to => 'static_pages#home'

end
