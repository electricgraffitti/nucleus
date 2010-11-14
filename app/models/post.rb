class Post < ActiveRecord::Base
  
  include CubeTime
  
  belongs_to :client
  has_many :comments
  
  # Associations
  
  # Validations
  
  # Paperclip
  has_attached_file :attachment,
                    :url => "/attachments/:id/:style_:basename.:extension",
                    :path => ":rails_root/public/attachments/:id/:style_:basename.:extension"
  
  named_scope :my_feed, :order => "created_at DESC"
  
end
