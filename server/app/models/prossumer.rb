class Prossumer < ActiveRecord::Base
  attr_accessor :password

  has_many :products

  has_many :groups_prossumers
  has_many :groups, :through => :groups_prossumers

  has_many :orders
  has_many :stocks, through: :orders


  EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\z/i
  validates :name, :presence => true, :length => {:in => 3..50}
  validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX
  validates :password, :presence => true, :on => :create
  validates_length_of :password, :in => 6..150, :on => :create

  before_save :encrypt_password
  after_save :clear_password

  def encrypt_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
      self.confirm_hash = SecureRandom.hex #=> "91dc3bfb4de5b11d029d376634589b61"
    end
  end

  def clear_password
    self.password = nil
  end


  def match_password(password="")
    encrypted_password == BCrypt::Engine.hash_secret(password, salt)
  end

  def as_json(options={})
    options[:except] ||= [:encrypted_password, :salt, :confirm_hash]
    options[:include] ||= [:groups]
    super
  end


end
