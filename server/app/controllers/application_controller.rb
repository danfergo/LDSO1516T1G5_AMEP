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
end
