Rails.application.routes.draw do


  scope '/api/v1' do
    resources :groups, only: [:index, :create]

    resources :prossumers, only: [:create]
    get '/confirm-account/', to: 'prossumers#confirm_account'
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'

    resources :products, only: [:index, :create]


    resources :cycles, except: [:new, :edit]

  end

end
