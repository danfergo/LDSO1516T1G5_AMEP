class PdfDownloadController < ApplicationController


  def index
    @cycle = Cycle.find(params[:cycle_id])

    pdf = ReportCycle.new(@cycle)
    send_data pdf.render, filename: 'cycle_' + params[:cycle_id] + '.pdf', type: 'application/pdf'

  end


  def show
    @cycle = Cycle.find(params[:cycle_id])
    pdf = ReportCycle_by_id.new(params[:id],@cycle)
    send_data pdf.render, filename: 'cycle_' + params[:cycle_id] + 'prossumer_' + params[:id] + '.pdf', type: 'application/pdf'
  end


end


class ReportCycle < Prawn::Document
  def initialize(cycle)
    super()
    @cycle = cycle
    header(@cycle.title)
    move_down 20
    #text_content
    self.font_size(7)
    @cycle.weeks.each do |week|
      text "Semana " + week.number.to_s, size: 15, style: :bold
      table_content(week)
      move_down 20
    end
  end

  def header(title)
    #This inserts an image in the pdf file and sets the size of the image
    #image "#{Rails.root}/app/assets/images/header.png", width: 530, height: 150
    if(title)
      text "Resumo do ciclo " + title, size: 15, style: :bold
    end
  end

  #def text_content
    # The cursor for inserting content starts on the top left of the page. Here we move it down a little to create more space between the text and the image inserted above
  #  y_position = cursor - 50

    # The bounding_box takes the x and y coordinates for positioning its content and some options to style it
   # bounding_box([0, y_position], :width => 270, :height => 300) do
    #  text "Lorem ipsum", size: 15, style: :bold
     # text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum semper placerat. Aenean mattis fringilla risus ut fermentum. Fusce posuere dictum venenatis. Aliquam id tincidunt ante, eu pretium eros. Sed eget risus a nisl aliquet scelerisque sit amet id nisi. Praesent porta molestie ipsum, ac commodo erat hendrerit nec. Nullam interdum ipsum a quam euismod, at consequat libero bibendum. Nam at nulla fermentum, congue lectus ut, pulvinar nisl. Curabitur consectetur quis libero id laoreet. Fusce dictum metus et orci pretium, vel imperdiet est viverra. Morbi vitae libero in tortor mattis commodo. Ut sodales libero erat, at gravida enim rhoncus ut."
   # end

   # bounding_box([300, y_position], :width => 270, :height => 300) do
    #  text "Duis vel", size: 15, style: :bold
     # text "Duis vel tortor elementum, ultrices tortor vel, accumsan dui. Nullam in dolor rutrum, gravida turpis eu, vestibulum lectus. Pellentesque aliquet dignissim justo ut fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut venenatis massa non eros venenatis aliquet. Suspendisse potenti. Mauris sed tincidunt mauris, et vulputate risus. Aliquam eget nibh at erat dignissim aliquam non et risus. Fusce mattis neque id diam pulvinar, fermentum luctus enim porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    #end

  #end

  def table_content(week)
    # This makes a call to product_rows and gets back an array of data that will populate the columns and rows of a table
    # I then included some styling to include a header and make its text bold. I made the row background colors alternate between grey and white
    # Then I set the table column widths
    table product_rows(week) do
      self.columns(3..5).style(:align => :right)
      self.row(0).font_style = :bold
      self.header = true
      self.row_colors = ['DDDDDD', 'FFFFFF']
      self.column_widths = [100,100,100,25,60,60,40]
    end
  end

  def product_rows(week)
    orders = Order.where(stock_id: week.stocks.ids).joins(:prossumer).order("prossumers.name")
    result = [['Consumidor', 'Produto', 'Produtor','Qtd','Preço Ecos','Preço Euros','Check']]
    orders.each do |order|
      result += [[order.prossumer.name, order.stock.product.title, order.stock.product.prossumer.name,order.quantity,order.quantity*order.stock.unit_price_ecos,order.quantity*order.stock.unit_price_euros,'']]
    end
    result

  end
end

class ReportCycle_by_id < Prawn::Document

  def initialize(prossumer_id , cycle)
    super()
    @cycle = cycle
    @prossumer = Prossumer.find(prossumer_id)
    header(@prossumer.name , @cycle.title)
    move_down 20
    self.font_size(7)
    @cycle.weeks.each do |week|
      text "Semana " + week.number.to_s, size: 15, style: :bold
      text "Encomendas", size: 12, style: :bold
      table_content_enc(prossumer_id,week)
      move_down 5
      text "Vendas", size: 12, style: :bold
      table_content_sales(prossumer_id,week)
      move_down 20
    end
  end


  def header(name,title)
    #This inserts an image in the pdf file and sets the size of the image
    #image "#{Rails.root}/app/assets/images/header.png", width: 530, height: 150
    text "Prossumer " + name, size: 15, style: :bold
    if(title)
      text "Resumo do ciclo " + title, size: 15, style: :bold
    end
  end


  def table_content_enc(prossumer_id , week)
    # This makes a call to product_rows and gets back an array of data that will populate the columns and rows of a table
    # I then included some styling to include a header and make its text bold. I made the row background colors alternate between grey and white
    # Then I set the table column widths
    table product_rows_enc(prossumer_id, week) do
      self.columns(3..5).style(:align => :right)
      self.row(0).font_style = :bold
      self.header = true
      self.row_colors = ['DDDDDD', 'FFFFFF']
      self.column_widths = [100,100,100,25,60,60,40]
    end
  end

  def product_rows_enc( prossumer_id , week)
    orders = Order.where({stock_id: week.stocks.ids, prossumer_id: prossumer_id}).joins(:prossumer).order("prossumers.name")
    result = [['Consumidor', 'Produto', 'Produtor','Qtd','Preço Ecos','Preço Euros','Check']]
    orders.each do |order|
      result += [[order.prossumer.name, order.stock.product.title, order.stock.product.prossumer.name,order.quantity,order.quantity*order.stock.unit_price_ecos,order.quantity*order.stock.unit_price_euros,'']]
    end
    result
  end

  def table_content_sales(prossumer_id , week)
    # This makes a call to product_rows and gets back an array of data that will populate the columns and rows of a table
    # I then included some styling to include a header and make its text bold. I made the row background colors alternate between grey and white
    # Then I set the table column widths
    table product_rows_sales(prossumer_id, week) do
      self.columns(3..5).style(:align => :right)
      self.row(0).font_style = :bold
      self.header = true
      self.row_colors = ['DDDDDD', 'FFFFFF']
      self.column_widths = [100,100,100,25,60,60,40]
    end
  end

  def product_rows_sales( prossumer_id , week)
    products_ids = Product.where(prossumer_id: prossumer_id).ids
    stocks_ids = Stock.where({product_id: products_ids, id: week.stocks.ids}).ids
    orders = Order.where(stock_id: stocks_ids).joins(:prossumer).order("prossumers.name")
    result = [['Consumidor', 'Produto', 'Produtor','Qtd','Preço Ecos','Preço Euros','Check']]
    orders.each do |order|
      result += [[order.prossumer.name, order.stock.product.title, order.stock.product.prossumer.name,order.quantity,order.quantity*order.stock.unit_price_ecos,order.quantity*order.stock.unit_price_euros,'']]
    end
    result
  end


end