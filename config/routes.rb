PinterestClone::Application.routes.draw do
  resources :users, :except => [:edit, :new]
  resources(:boards, :except => [:edit, :new]) do
    resources :pins, :except => [:edit, :new]
  end

  get 'session/check', :to => 'sessions#check'

  resources :session, :only => [:create, :destroy]

  root :to => "root#root"
end