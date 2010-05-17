# == Schema Information
#
# Table name: providers
#
#  id                     :integer(4)      not null, primary key
#  first_name             :string(255)
#  last_name              :string(255)
#  tin                    :integer(4)
#  state_id               :integer(4)
#  created_at             :datetime
#  updated_at             :datetime
#  sequence_number        :string(255)
#  provider_group_id      :integer(4)
#  provider_tax_id        :integer(4)
#  provider_score         :integer(4)
#  provider_speciality_id :integer(4)
#

class Provider < ActiveRecord::Base
  
  include Graphs
  
  belongs_to :provider_group
  belongs_to :provider_speciality
  belongs_to :state
  
  has_many :claims
  has_many :patients, :through => :claims
  has_one :provider_stat
  
  has_many :conditions
  has_many :condition_stats, :through => :conditions
  
  has_many :locations, :class_name => "Location"
  accepts_nested_attributes_for :locations, :allow_destroy => true
  
  
  def full_name
    full_name = self.first_name + " " + self.last_name
    return full_name
  end
  
  def score_color(s)
    
    score = s.provider_score
    
    score_color = case score
      when 800..1000: "red"
      when 450..799: "yellow"
      else "green"
    end
    return score_color
  end
  
end

