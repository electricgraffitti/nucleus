class Provider < ActiveRecord::Base
  
  belongs_to :provider_group
  belongs_to :state
  has_many :claims
  has_many :patients, :through => :claims
  
  def full_name
    full_name = self.first_name + " " + self.last_name
    return full_name
  end
  
  def score_color(s)
    
    score = s.provider_score
    
    score_color = case score
      when 81..100: "red"
      when 45..79: "yellow"
      else "green"
    end
    return score_color
  end
  
end
