class CitiesController < ApplicationController
    before_action :set_group, only: [:show, :update, :destroy]

    # GET /cities
    # GET /cities.json
    def index
      @cities = City.all

      render json: @cities
    end

    # GET /cities/1
    # GET /cities/1.json
    def show
      render json: @city
    end

    # POST /cities
    # POST /cities.json
    def create
      @city = City.new(city_params)
    end



end
