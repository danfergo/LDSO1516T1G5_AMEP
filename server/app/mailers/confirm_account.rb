class ConfirmAccount < ApplicationMailer
  def welcome(prossumer)
    @prossumer = prossumer
    mail(to: @prossumer.email, subject: 'Bem-vindo à AMEP')
  end
end
