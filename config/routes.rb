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
  map.provider_search "nucleus-provider-search/:id", :controller => "providers", :action => "provider_search"
  map.provider_action "nucleus-provider-action/:id", :controller => "providers", :action => "provider_action"
  
  # For Test
  map.note "claim-notes", :controller => "claims", :action => "note"
  map.panel_test "panel-test", :controller => "dashboard", :action => "panel_test"
  
  map.root :controller => "dashboard", :action => "login"

  
end
