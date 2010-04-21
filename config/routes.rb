ActionController::Routing::Routes.draw do |map|

  map.resources :clients
  map.resources :client_sessions
  map.resources :claims
  map.resources :providers
  
  map.logout "client-logout", :controller => "client_sessions", :action => "destroy"

  map.dashboard "nucleus-client-dashboard", :controller => "dashboard", :action => "index"

  map.root :controller => "client_sessions", :action => "new"

  
end
