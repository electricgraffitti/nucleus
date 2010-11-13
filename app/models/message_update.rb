class MessageUpdate < ActiveRecord::Base
end

# == Schema Information
#
# Table name: message_updates
#
#  id         :integer(4)      not null, primary key
#  message_id :integer(4)
#  client_id  :integer(4)
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

