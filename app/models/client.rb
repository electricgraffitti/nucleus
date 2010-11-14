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
class Client < ActiveRecord::Base
  
  include Access
  require "digest/sha1"
  has_many :widget_views
  has_many :dashboard_widgets, :through => :widget_views
  accepts_nested_attributes_for :dashboard_widgets
  
  has_many :posts
  
  has_one :client_profile
  has_one :client_connection
  
  validates_uniqueness_of :email, :on => :create, :message => "Email already registered"
  
  acts_as_authentic
  
  def full_name
    full_name = self.first_name + " " + self.last_name
    return full_name
  end
  
  def setup_key(length = 20)
    Digest::SHA1.hexdigest(Time.now.to_s + rand(12341234).to_s)[1..length]
  end
  
end
