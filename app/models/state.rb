class State < ActiveRecord::Base
  
  has_many :providers
  
  named_scope :displayable, :conditions => { :display => 1 }, :order => :abbreviation
end
