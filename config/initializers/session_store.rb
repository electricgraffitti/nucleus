# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_nucleus_session',
  :secret      => 'a434a0efe23968b655772cf2b9ae56dc64f30f21a2cfd09364b6e28258b5ba14272a19fb59cc423cbb33d60b8e3f6b79bd6ff7bcd5d78d04d12ed7e9d056237d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
