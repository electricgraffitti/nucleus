class ModalsController < ApplicationController
  
  layout "modal"
  
  def provider_profile
    @provider = Provider.find(params[:id])
    map_type = GMapType::G_HYBRID_MAP
    @coords = @provider.locations.first.fetch_coordinates()
    
    @coordsj = @coords.to_json
    
    @long = @coords[0]
    @lat = @coords[1]
    # @map = GMap.new("map")
    # @map.control_init(:large_map => true, :map_type => true, :street_view_control => true)
    # @map.center_zoom_init(coords,14)
    # @map.overlay_init(GMarker.new(coords,:title => "#{@provider.full_name}", :info_window => "Provider Location"))
    # @map.set_map_type_init(map_type)

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider }
      format.json { }
    end
  end

end
