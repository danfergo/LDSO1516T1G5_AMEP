Rails.application.routes.draw do


  resources :groups, except: [:new, :edit]
  # resources :cycles, except: [:new, :edit]
  scope '/api/v1' do
    resources :cities, only: [:index]
    get '/confirm-account/', to: 'prossumers#confirm_account'
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'


    resources :prossumers, only: [:create] do
      resources :products, only: [:index, :create]
      resources :agenda, only: [:index]
    end


    resources :groups, only: [:index, :create, :show] do
      resources :groups_prossumers, path: "prossumers", only: [:index,:show, :create]
    end

    post '/contact-form/', to: 'contact_form#create'

    resources :cycles, only: [:index, :create, :show]

  end

  # match all paths with index. we love rails <3
  match '(*foo)', to: 'index#index', via: [:get]
end
