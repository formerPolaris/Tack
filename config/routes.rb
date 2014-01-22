PinterestClone::Application.routes.draw do
  root :to => "root#root"

  resources :users, :except => [:edit, :new]
  resources(:boards, :except => [:edit, :new]) do
    resources :pins, :except => [:edit, :new]
  end

  get "session/show", :to => "sessions#show"
  resource :session, :only => [:create, :destroy]
end