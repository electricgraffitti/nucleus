ActionController::Routing::Routes.draw do |map|
  map.resources :comments

  map.resources :posts

  map.resources :client_profiles

  map.resources :message_updates

  map.resources :client_connections

  map.resources :client_contact_infos

  map.resources :feeds


  map.resources :widget_views
  map.resources :dashboard_widgets
  map.resources :tutorials
  map.resources :claim_statuses
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
  map.message_sidebar_profile "post_client", :controller => "clients", :action => "message_profile"
  
  map.street_view "street-view", :controller => "providers", :action => "street_view"
  
  # Dashboard Widgets
  map.dash1 "dash_1_call", :controller => "api", :action => 'dash1'
  map.dash2 "dash_2_call", :controller => "api", :action => 'dash2'
  map.dash3 "dash_3_call", :controller => "api", :action => 'dash3'
  map.dash4 "dash_4_call", :controller => "api", :action => 'dash4'
  map.dash5 "dash_5_call", :controller => "api", :action => 'dash5'
  map.dash6 "dash_6_call", :controller => "api", :action => 'dash6'
  map.dash7 "dash_7_call", :controller => "api", :action => 'dash7'
  map.dash8 "dash_8_call", :controller => "api", :action => 'dash8'
  map.dash9 "dash_9_call", :controller => "api", :action => 'dash9'
  map.dash10 "dash_10_call", :controller => "api", :action => 'dash10'
  map.dash11 "dash_11_call", :controller => "api", :action => 'dash11'
  map.dash12 "dash_12_call", :controller => "api", :action => 'dash12'
  
  # # For Tutorial Modals
  map.action_tutorials "action_tutorials", :controller => "tutorials", :action => "action_tutorials"
  map.quick_launch_tutorials "quick_launch_tutorials", :controller => "tutorials", :action => "quick_launch_tutorials"
  map.dashboard_tutorials "dashboard_tutorials", :controller => "tutorials", :action => "dashboard_tutorials"
  map.provider_search_tutorials "provider_search_tutorials", :controller => "tutorials", :action => "provider_search_tutorials"
  map.provider_profile_tutorials "provider_profile_tutorials", :controller => "tutorials", :action => "provider_profile_tutorials"
  map.message_center_tutorials "message_center_tutorials", :controller => "tutorials", :action => "message_center_tutorials"
  map.help_center_tutorials "help_center_tutorials", :controller => "tutorials", :action => "help_center_tutorials"
  map.idea_forum_tutorials "idea_forum_tutorials", :controller => "tutorials", :action => "idea_forum_tutorials"
  map.report_center_tutorials "report_center_tutorials", :controller => "tutorials", :action => "report_center_tutorials"
  map.claim_search_tutorials "claim_search_tutorials", :controller => "tutorials", :action => "claim_search_tutorials"
  map.claim_action_tutorials "claim_action_tutorials", :controller => "tutorials", :action => "claim_action_tutorials"
  
  # Main App Login
  map.remote_login "securekey-nucleus-main", :controller => "client_sessions", :action => "api_session"
  
  # For Test
  map.note "claim-notes", :controller => "claims", :action => "note"
  map.panel_test "panel-test", :controller => "dashboard", :action => "panel_test"
  
  # map.root :controller => "dashboard", :action => "login"
  map.root :controller => "client_sessions", :action => "login2"

  
end
