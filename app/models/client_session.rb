class ClientSession < Authlogic::Session::Base
  allow_http_basic_auth true
end
