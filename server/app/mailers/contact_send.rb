class ContactSend < ApplicationMailer
  def send_msg(prossumer, assunto, myMessage)
    @prossumer = prossumer
    @assunto = assunto
    @msg = myMessage
    mail(to: 'ivars.filipa@gmail.com', subject: "AMEP: recebeu uma mensagem :: #{@assunto}")
  end
end
