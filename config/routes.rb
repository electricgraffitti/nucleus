ActionController::Routing::Routes.draw do |map|

  map.resources :products
  map.resources :patients
  map.resources :provider_groups
  map.resources :search_topics
  map.resources :clients
  map.resources :client_sessions
  map.resources :claims
  map.resources :providers
  
  # Login Logout
  map.login "client-login", :controller => "client_sessions", :action => "new"
  map.logout "client-logout", :controller => "client_sessions", :action => "destroy"

  map.dashboard "nucleus-client-dashboard", :controller => "dashboard", :action => "index"
  map.quick_launch "nucleus-quick-launch", :controller => "dashboard", :action => "quick_launch"
  map.provider_search "nucleus-provider-search", :controller => "providers", :action => "provider_search"
  map.provider_action "nucleus-provider-action", :controller => "providers", :action => "provider_action"
  
  map.root :controller => "client_sessions", :action => "new"

  
end
