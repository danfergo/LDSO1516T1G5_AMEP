class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception


 # def show
 #   @post = Post.find(params[:id])
 #
 #   if stale?(last_modified: @post.updated_at)
 #   render json: @post
 #   end
 # end

  # in order do be accessible to all controllers
  def is_authenticated
    if session[:prossumer_id]
      return true
    else
      render json: {error: "Please log in in order to access"}, status:  :unauthorized
      return false
    end
  end

  def not_is_authenticated
    if session[:prossumer_id]
      render json: {error: "Please log out in order to access"}, status:  :method_not_allowed
      return false
    else
      return true
    end
  end

  def is_my_resource(id)
    if session[:prossumer_id] == id
      render json: {error: "Yo do not have access to this opeation"}, status:  :unauthorized
      return false
    else
      return true
    end
  end

  # thanks to http://www.railstips.org/blog/archives/2009/05/11/class-and-instance-methods-in-ruby/
  def authenticate(email, password)

    prossumer = Prossumer.find_by_email(email)
    if prossumer && prossumer.match_password(password) && prossumer.confirm_hash == nil
      return prossumer
    elsif prossumer && prossumer.match_password(password)
      return {error: 'Account not confirmed'}
    else
      return {error: 'Invalid Username or Password'}
    end
  end

end
