Rails.application.routes.draw do

  resources :cycles, except: [:new, :edit]
  scope '/api/v1' do
    resources :groups, only: [:index, :create]

    resources :prossumers, only: [:create]
    get '/confirm-account/', to: 'prossumers#confirm_account'
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'

    resources :products, only: [:index, :create]

  end

end
