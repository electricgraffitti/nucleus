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
  map.login "nucleus-login", :controller => "client_sessions", :action => "login2"
  map.logout "nucleus-logout", :controller => "client_sessions", :action => "destroy"

  # Named Routes
  map.dashboard "nucleus-client-dashboard", :controller => "dashboard", :action => "index"
  map.client_feedback "nucleus-client-feedback", :controller => "feedbacks", :action => "index"
  map.client_settings "nucleus-client-settings", :controller => "clients", :action => "show"
  map.claims_list "condition-claims-list", :controller => "claims", :action => "claims_list"
  map.claim_action "claim-action", :controller => "claims", :action => "show"
  map.help "nucleus-help", :controller => "help", :action => "index"
  map.quick_launch "nucleus-quick-launch", :controller => "dashboard", :action => "quick_launch"
  map.provider_search "nucleus-provider-search/:id", :controller => "providers", :action => "provider_search"
  map.provider_action "nucleus-provider-action/:id", :controller => "providers", :action => "provider_action"
  
  # For Popout Modals
  map.profile_modal "provider_profile/:id", :controller => "modals", :action => "provider_profile"
  
  # For Ajax Calls
  map.sfrp_stats "sfro-stats", :controller => "provider_stats", :action => "sfro_stat_panel"
  map.sbrd_stats "sbrd-stats", :controller => "provider_stats", :action => "sbrd_stat_panel"
  map.sdes_stats "sdes-stats", :controller => "provider_stats", :action => "sdes_stat_panel"
  
  map.street_view "street-view", :controller => "providers", :action => "street_view"
  
  # For Test
  map.note "claim-notes", :controller => "claims", :action => "note"
  map.panel_test "panel-test", :controller => "dashboard", :action => "panel_test"
  
  # map.root :controller => "dashboard", :action => "login"
  map.root :controller => "client_sessions", :action => "login2"

  
end
