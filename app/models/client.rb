class Client < ActiveRecord::Base
  
  validates_uniqueness_of :email, :on => :create, :message => "Email already registered"
  
  acts_as_authentic
  
  def full_name
    full_name = self.first_name + " " + self.last_name
    return full_name
  end
  
end
