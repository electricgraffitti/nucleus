# == Schema Information
#
# Table name: locations
#
#  id               :integer(4)      not null, primary key
#  name             :string(255)
#  address          :text
#  city             :string(255)
#  state_id         :integer(4)
#  zipcode          :string(255)
#  provider_id      :integer(4)
#  created_at       :datetime
#  updated_at       :datetime
#  latitude         :float
#  longitude        :float
#  location_type    :string(255)
#  total_claims     :integer(4)
#  total_patients   :integer(4)
#  total_billed     :integer(4)
#  total_paid       :integer(4)
#  suspect_location :boolean(1)
#
class Location < ActiveRecord::Base
  
  belongs_to :state
  belongs_to :provider
  
  after_validation :fetch_coordinates
  
  geocoded_by :location

  def location
    [address, city, state, zipcode].compact.join(', ')
  end
  
end



# == Schema Information
#
# Table name: locations
#
#  id               :integer(4)      not null, primary key
#  name             :string(255)
#  address          :text
#  city             :string(255)
#  state_id         :integer(4)
#  zipcode          :string(255)
#  provider_id      :integer(4)
#  created_at       :datetime
#  updated_at       :datetime
#  latitude         :float
#  longitude        :float
#  location_type    :string(255)
#  total_claims     :integer(4)
#  total_patients   :integer(4)
#  total_billed     :integer(4)
#  total_paid       :integer(4)
#  suspect_location :boolean(1)
#

