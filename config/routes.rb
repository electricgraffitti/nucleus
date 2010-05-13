ActionController::Routing::Routes.draw do |map|
  
  
  map.resources :claims
  map.resources :monthly_billings
  map.resources :procedures
  map.resources :procedure_submissions
  map.resources :condition_stats
  map.resources :conditions
  map.resources :condition_types
  map.resources :feedbacks
  map.resources :products
  map.resources :patients
  map.resources :provider_groups
  map.resources :search_topics
  map.resources :clients
  map.resources :client_sessions
  map.resources :claims
  map.resources :providers
  map.resources :provider_stats
  map.resources :provider_specialities
  map.resources :locations
  map.resources :reports
  map.resources :messages
  
  # Login Logout
  map.login "client-login", :controller => "client_sessions", :action => "new"
  map.logout "client-logout", :controller => "client_sessions", :action => "destroy"

  map.dashboard "nucleus-client-dashboard", :controller => "dashboard", :action => "index"
  map.client_feedback "nucleus-client-feedback", :controller => "feedbacks", :action => "index"
  map.client_settings "nucleus-client-settings", :controller => "clients", :action => "show"
  map.help "nucleus-help", :controller => "help", :action => "index"
  map.quick_launch "nucleus-quick-launch", :controller => "dashboard", :action => "quick_launch"
  map.provider_search "nucleus-provider-search/:id", :controller => "providers", :action => "provider_search"
  map.provider_action "nucleus-provider-action/:id", :controller => "providers", :action => "provider_action"
  
  # For Test
  map.note "claim-notes", :controller => "claims", :action => "note"
  map.panel_test "panel-test", :controller => "dashboard", :action => "panel_test"
  
  map.root :controller => "dashboard", :action => "login"

  
end
