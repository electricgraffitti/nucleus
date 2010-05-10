class Message < ActiveRecord::Base
end

# == Schema Information
#
# Table name: messages
#
#  id             :integer(4)      not null, primary key
#  disscussion_id :integer(4)
#  message        :text
#  created_at     :datetime
#  updated_at     :datetime
#

