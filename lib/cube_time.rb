module CubeTime
  
  def time_formatter(time)
    if time > Date.today
      return "#{time_ago_in_words(time)} ago"
    elsif time > Date.yesterday
      return "yesterday at #{time.strftime('%H:%M%P').downcase}"
    elsif time > 6.days.ago.to_date #in the last week
      return "#{time.strftime('%A')} at #{time.strftime('%H:%M%P').downcase}" 
    elsif time > Date.parse("1/1/#{Time.now.year}") #this year
      return "#{time.strftime('%A, %B')} #{time.day.ordinalize}, at #{time.strftime('%H:%M%P').downcase}" 
    else
      return "#{time.strftime('%A, %B')} #{time.day.ordinalize}, #{time.year} at #{time.strftime('%H:%M%P').downcase}"     
    end
  end
  
end