class State < ActiveRecord::Base
  
  has_many :providers
  has_many :locations
  
  named_scope :displayable, :conditions => { :display => 1 }, :order => :abbreviation
end
