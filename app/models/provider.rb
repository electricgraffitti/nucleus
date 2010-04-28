class Provider < ActiveRecord::Base
  
  belongs_to :provider_group
  belongs_to :state
  has_many :claims
  has_many :patients, :through => :claims
  
end
