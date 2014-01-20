PinterestClone::Application.routes.draw do
  root :to => "root#root"

  resources :users, :except => [:edit, :new]
  resources(:boards, :except => [:edit, :new]) do
    resources :pins, :except => [:edit, :new]
  end

  get 'session/check', :to => 'sessions#check'

  resource :session, :only => [:create, :destroy, :show]
end