# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
    helper :all
    helper_method :current_client, :current_client_session, :super?, :super_admin, :ipad?
    filter_parameter_logging :password, :password_confirmation

    private
      
      def ipad?
        request.user_agent =~ /iPad/i
      end
      
      def current_client_session
        return @current_client_session if defined?(@current_client_session)
        @current_client_session = ClientSession.find
      end

      def current_client
        return @current_client if defined?(@current_client)
        @current_client = current_client_session && current_client_session.record
      end

      def require_client
        unless current_client
          store_location
          flash[:notice] = "You must be logged in to access this page"
          redirect_to login_path
          return false
        end
      end

      def require_no_client
        if current_client
          store_location
          flash[:notice] = "You must be logged out to access this page"
          redirect_to root_path
          return false
        end
      end

      def store_location
        session[:return_to] = request.request_uri
      end

      def redirect_back_or_default(default)
        redirect_to(session[:return_to] || default)
        session[:return_to] = nil
      end
      
      
      protected

      def super_admin
       unless super? 
         return false
       end
      end

      def super?
        authenticate_or_request_with_http_basic do |username, password|
          username == APP['username'] && password == APP['password']
        end
      end
end
