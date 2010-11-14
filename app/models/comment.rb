class Comment < ActiveRecord::Base
  
  include CubeTime
  
  belongs_to :client
  belongs_to :post
  # Associations
  
  # Validations
  
  # Paperclip  
  has_attached_file :comment_attachment,
                    :url => "/comment_attachments/:id/:style_:basename.:extension",
                    :path => ":rails_root/public/comment_attachments/:id/:style_:basename.:extension"
  
end
