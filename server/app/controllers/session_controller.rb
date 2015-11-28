class SessionController < ApplicationController
  before_filter :is_authenticated, :except => [:create, :index]
  after_filter :short_session


  def index
    if (session[:prossumer_id])
      render json: Prossumer.includes(:groups).find_by_id(session[:prossumer_id])
    else
      render nothing: true, status: :no_content
    end
  end

  def create
    prossumer = authenticate(session_params[:email], session_params[:password])

    if !prossumer[:error]
      session[:prossumer_id] = prossumer.id
      render json: prossumer, status: :created #, location: @prossumer
    else
      session[:prossumer_id] = nil # just in case there exists an old session
      render json: prossumer, status: :unprocessable_entity
    end
  end

  def delete
    session[:prossumer_id] = nil
    render json: {success: 'Session deleted with success'}
  end


  private
  def session_params
    params.require(:email)
    params.require(:password)
    params
  end

  def short_session
    # request.session_options = request.session_options.dup
    # request.session_options[:expire_after] = 1.minute
    # request.session_options.freeze
  end
end
