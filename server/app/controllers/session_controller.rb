class SessionController < ApplicationController
  before_filter :is_authenticated, :except => [:create,:index]

  def index
      if(session[:prossumer_id])
        render json: Prossumer.find_by_id(session[:prossumer_id])
      else
        render json: ''  , status: :no_content
      end
  end

  def create
    prossumer = authenticate(session_params[:email], session_params[:password])

    if prossumer
      session[:prossumer_id] = prossumer.id
      render json: prossumer, status: :created #, location: @prossumer
    else
      session[:prossumer_id] = nil # just in case there exists an old session
      render json: {error: 'Invalid Username or Password' }, status: :unprocessable_entity
    end
  end


  def delete
    session[:prossumer_id] = nil
    render json: {success: 'Session deleted with success' }
  end



  # thanks to http://www.railstips.org/blog/archives/2009/05/11/class-and-instance-methods-in-ruby/
  def authenticate(email, password)
    prossumer = Prossumer.find_by_email(email)
    if prossumer && prossumer.match_password(password)
      return prossumer
    else
      return false
    end
  end

  private
    def session_params
      params.require(:email)
      params.require(:password)
      params
    end

end
