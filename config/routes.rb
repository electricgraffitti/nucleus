ActionController::Routing::Routes.draw do |map|
  map.resources :claims

  map.resources :providers

  
  map.root :controller => "dashboard", :action => "index"
  
end
