Rails.application.routes.draw do

  scope '/api/v1' do
    resources :groups, only: [:index, :create]

    resources :prossumers, only: [:create]
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'

    resources :products, only: [:index, :create]

  end

end
