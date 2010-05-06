class CreateProviderSpecialities < ActiveRecord::Migration
  def self.up
    create_table :provider_specialities do |t|
      t.string :speciality_code
      t.string :speciality_type

      t.timestamps
    end
  end

  def self.down
    drop_table :provider_specialities
  end
end
