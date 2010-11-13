# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20101113165854) do

  create_table "claim_statuses", :force => true do |t|
    t.string   "claim_status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "claims", :force => true do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.integer  "product_id"
    t.string   "batch_number"
    t.string   "sequence_number"
    t.string   "sequence_sub_number"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "claim_status_id"
  end

  create_table "client_connections", :force => true do |t|
    t.integer  "client_id"
    t.integer  "follower_count"
    t.integer  "following_count"
    t.integer  "group_count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "client_contact_infos", :force => true do |t|
    t.integer  "client_id"
    t.string   "company"
    t.string   "title"
    t.string   "department"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "client_profiles", :force => true do |t|
    t.integer  "client_id"
    t.string   "company"
    t.string   "title"
    t.string   "department"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "client_sessions", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "username"
    t.string   "email"
    t.string   "crypted_password"
    t.string   "password_salt"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "persistence_token"
    t.string   "api_key"
  end

  create_table "condition_stats", :force => true do |t|
    t.integer  "condition_count"
    t.integer  "condition_code_count"
    t.integer  "conditions_per_code"
    t.integer  "repair_count"
    t.integer  "repair_percentage"
    t.integer  "condition_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "condition_types", :force => true do |t|
    t.string   "condition_type"
    t.string   "condition_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "conditions", :force => true do |t|
    t.integer  "provider_id"
    t.integer  "condition_type_id"
    t.boolean  "pro_sub"
    t.datetime "trigger_date"
    t.integer  "condition_rank"
    t.integer  "total_provider"
    t.integer  "condition_score"
    t.integer  "condition_billed"
    t.integer  "expected_billed"
    t.integer  "condition_paid"
    t.string   "hci_action"
    t.integer  "speciality_average_count"
    t.integer  "speciality_average_percentage"
    t.integer  "speciality_average_billed"
    t.integer  "speciality_average_paid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dashboard_widgets", :force => true do |t|
    t.string   "name"
    t.string   "page"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "feedbacks", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "feeds", :force => true do |t|
    t.string   "title"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", :force => true do |t|
    t.string   "name"
    t.text     "address"
    t.string   "city"
    t.integer  "state_id"
    t.string   "zipcode"
    t.integer  "provider_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "location_type"
    t.integer  "total_claims"
    t.integer  "total_patients"
    t.integer  "total_billed"
    t.integer  "total_paid"
    t.boolean  "suspect_location"
  end

  create_table "message_updates", :force => true do |t|
    t.integer  "message_id"
    t.integer  "client_id"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", :force => true do |t|
    t.integer  "client_id"
    t.integer  "disscussion_id"
    t.text     "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "monthly_billings", :force => true do |t|
    t.integer  "condition_id"
    t.date     "month"
    t.float    "amount"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "ssn"
    t.string   "sequence"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "procedure_submissions", :force => true do |t|
    t.integer  "condition_id"
    t.integer  "procedure_id"
    t.integer  "total_submissions"
    t.integer  "total_billed"
    t.integer  "total_paid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "procedures", :force => true do |t|
    t.integer  "procedure_code"
    t.string   "procedure_description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider_groups", :force => true do |t|
    t.string   "name"
    t.string   "group_tin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider_specialities", :force => true do |t|
    t.string   "speciality_code"
    t.string   "speciality_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider_stats", :force => true do |t|
    t.integer  "final_line_count"
    t.integer  "total_line_count"
    t.integer  "final_procedure_count"
    t.integer  "total_procedure_count"
    t.integer  "final_patient_count"
    t.integer  "total_patient_count"
    t.integer  "final_claim_count"
    t.integer  "total_claim_count"
    t.integer  "final_savings_count"
    t.integer  "total_savings_count"
    t.integer  "final_billed_count"
    t.integer  "total_billed_count"
    t.integer  "provider_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "providers", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "tin"
    t.integer  "state_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "sequence_number"
    t.integer  "provider_group_id"
    t.integer  "provider_tax_id"
    t.integer  "provider_score"
    t.integer  "provider_speciality_id"
  end

  create_table "reports", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "search_topics", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "states", :force => true do |t|
    t.string   "abbreviation", :limit => 2
    t.string   "full_name"
    t.boolean  "display",                   :default => true
    t.integer  "created_by"
    t.integer  "updated_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tutorials", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "page_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "widget_views", :force => true do |t|
    t.integer  "client_id"
    t.integer  "dashboard_widget_id"
    t.boolean  "active"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
