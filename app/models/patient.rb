class Patient < ActiveRecord::Base
  
  has_many :claims
  has_many :providers, :through => :claims
  
end
