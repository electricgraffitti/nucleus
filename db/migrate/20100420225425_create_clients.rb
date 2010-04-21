class CreateClients < ActiveRecord::Migration
  def self.up
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :crypted_password
      t.string :password_salt

      t.timestamps
    end
  end

  def self.down
    drop_table :clients
  end
end
