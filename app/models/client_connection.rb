# == Schema Information
#
# Table name: client_connections
#
#  id              :integer(4)      not null, primary key
#  client_id       :integer(4)
#  follower_count  :integer(4)
#  following_count :integer(4)
#  group_count     :integer(4)
#  created_at      :datetime
#  updated_at      :datetime
#
class ClientConnection < ActiveRecord::Base
  
  belongs_to :client
  
end


