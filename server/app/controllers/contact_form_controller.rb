class ContactFormController < ApplicationController
  before_filter :email_params
  def create

    if session[:prossumer_id]
      @prossumer = Prossumer.find(session[:prossumer_id])
    else
      @prossumer = {
        :email => params[:email],
        :name => params[:nome],
        :phone => params[:tlm] ? params[:tlm] : nil
      }
    end
    ContactSend.send_msg(@prossumer, params[:assunto], params[:myMessage]).deliver_later
  end

  def email_params
    if !session[:prossumer_id]
      params.require(:nome)
      params.require(:email)
    end
    params.require(:assunto)
    params.require(:myMessage)
  end
end
