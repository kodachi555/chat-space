Rails.application.routes.draw do

  # resourceと似たようなもん。deviseの便利機能
  devise_for :users
  root 'groups#index'
  # users/:id/edit　と　users/:id/update　にルートを設定
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
