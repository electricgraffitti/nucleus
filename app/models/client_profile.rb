# == Schema Information
#
# Table name: client_profiles
#
#  id                  :integer(4)      not null, primary key
#  client_id           :integer(4)
#  company             :string(255)
#  title               :string(255)
#  department          :string(255)
#  email               :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer(4)
#  avatar_updated_at   :datetime
#

class ClientProfile < ActiveRecord::Base
  
  belongs_to :client
  
  # Associations
  
  # Validations
  
  # Paperclip
  has_attached_file :avatar, 
                    :styles => { :full => "100x100#", :thumb => "64x64#", :micro => "50x50#" },
                    :url => "/avatars/:id/:style_:basename.:extension",
                    :path => ":rails_root/public/avatars/:id/:style_:basename.:extension"
  
end

