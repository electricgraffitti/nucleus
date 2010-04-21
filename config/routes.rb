ActionController::Routing::Routes.draw do |map|
  
  map.resources :claims
  map.resources :providers
  
  map.root :controller => "client_sessions", :action => "new"
  
end
