class ConfirmAccount < ApplicationMailer
  def welcome(prossumer)
    @prossumer = prossumer
    @confirmUrl = "https://amep.herokuapp.com/confirm-account?id=#{@prossumer.id}&hash=#{@prossumer.confirm_hash}"
    mail(to: @prossumer.email, subject: 'Bem-vindo à AMEP')
  end
end
