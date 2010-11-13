class ClientContactInfo < ActiveRecord::Base
end

# == Schema Information
#
# Table name: client_contact_infos
#
#  id         :integer(4)      not null, primary key
#  client_id  :integer(4)
#  company    :string(255)
#  title      :string(255)
#  department :string(255)
#  email      :string(255)
#  phone      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

