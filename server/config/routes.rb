Rails.application.routes.draw do


  # resources :cycles, except: [:new, :edit]
  scope '/api/v1' do
    resources :groups, only: [:index, :create, :show]
    resources :cities, only: [:index]
    resources :prossumers, only: [:create]
    get '/confirm-account/', to: 'prossumers#confirm_account'
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'

    resources :products, only: [:index, :create]

  end

  # match all paths with index. we love rails <3
  match '(*foo)', to: 'index#index', via: [:get]
end
