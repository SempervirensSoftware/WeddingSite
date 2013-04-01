WeddingSite::Application.routes.draw do
  
  get '/:detail' => 'static_pages#home'
  root :to => 'static_pages#home'

end
