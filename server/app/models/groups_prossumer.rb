class GroupsProssumer < ActiveRecord::Base
  belongs_to :group
  belongs_to :prossumer

  validates_uniqueness_of :group_id, scope: [:prossumer_id]

  def as_json(options={})
    if (options[:include_prossumer] == true)
      options[:include] = {
          :prossumer => {
              :except => [:encrypted_password, :salt, :confirm_hash]
          }
      }
    end
    super
  end

end
