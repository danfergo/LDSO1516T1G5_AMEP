Rails.application.routes.draw do


  scope '/api/v1' do
    resources :cities, only: [:index]
    resources :product_categories, only: [:index]

    get '/confirm-account/', to: 'prossumers#confirm_account'
    resources :session, only: [:index, :create, :destroy]
    delete '/session/', to: 'session#delete'


    resources :prossumers, only: [:create, :update] do
      resources :products, only: [:index, :create]
      resources :agenda, only: [:index]
    end


    resources :groups, only: [:index, :create, :show] do
      resources :groups_prossumers, path: 'prossumers', only: [:index, :show, :create,:update]
      resources :stats, path: 'stats', only: [:index]
      resources :groups_about, path: 'about', only: [:index, :show, :create]
      resources :cycles, only: [:index, :create, :show] do
        resources :groups_cycles_products, path: 'products', only: [:index, :show, :update, :destroy]
        resources :groups_cycles_weeks, path: 'weeks', only: [:index]
      end
      resources :groups_products_auths, path: 'products_auths', only: [:index, :show, :update]
    end

    post '/contact-form/', to: 'contact_form#create'


    resources :cycles, except: [:new, :edit]

  end

  # match all paths with index. we love rails <3
  match '(*foo)', to: 'index#index', via: [:get]
end
