class SearchTopic < ActiveRecord::Base
  
  include Search
  
end

# == Schema Information
#
# Table name: search_topics
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

