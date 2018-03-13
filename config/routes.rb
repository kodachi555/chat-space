Rails.application.routes.draw do

  # resourceと似たようなもん。deviseの便利機能
  devise_for :users
  root 'messages#index'
  # users/:id/edit　と　users/:id/update　にルートを設定
  resource :users, only: [:edit, :update]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
