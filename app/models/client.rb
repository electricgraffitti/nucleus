class Client < ActiveRecord::Base
  
  validates_uniqueness_of :email, :on => :create, :message => "Email already registered"
  
  acts_as_authentic
  
  def full_name
    full_name = self.first_name + " " + self.last_name
    return full_name
  end
  
end

# == Schema Information
#
# Table name: clients
#
#  id                :integer(4)      not null, primary key
#  first_name        :string(255)
#  last_name         :string(255)
#  username          :string(255)
#  email             :string(255)
#  crypted_password  :string(255)
#  password_salt     :string(255)
#  created_at        :datetime
#  updated_at        :datetime
#  persistence_token :string(255)
#

