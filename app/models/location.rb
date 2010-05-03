class Location < ActiveRecord::Base
  
  belongs_to :state
  belongs_to :provider
  
  after_validation :fetch_coordinates
  
  geocoded_by :location

  def location
    [address, city, state, zipcode].compact.join(', ')
  end
  
  # 
  # - 40.646785
  # - -111.888066
  
  
end
