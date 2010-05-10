class AddProcedureCodeBooleanToConditions < ActiveRecord::Migration
  def self.up
    add_column :conditions, :pro_sub, :boolean
  end

  def self.down
    remove_column :conditions, :pro_sub
  end
end
