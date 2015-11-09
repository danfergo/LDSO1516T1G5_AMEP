class Prossumer < ActiveRecord::Base
  attr_accessor :password
  has_many  :products

  EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\z/i
  validates :name, :presence => true, :length => { :in => 3..20 }
  validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX
  validates :password, :presence => true
  validates_length_of :password, :in => 6..20, :on => :create

  before_save :encrypt_password
  after_save :clear_password

  def encrypt_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
    end
  end
  def clear_password
    self.password = nil
  end


  def match_password(password="")
    encrypted_password == BCrypt::Engine.hash_secret(password, salt)
  end

  def as_json(options={})
    options[:except] ||= [:encrypted_password, :salt]
    super
  end

end
