class ApplicationController < ActionController::API
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  def show
    @get = Post.find(params[:id])

    if stale?(last_modified: @get.updated_at)
      render json: @get
    end
  end
end
