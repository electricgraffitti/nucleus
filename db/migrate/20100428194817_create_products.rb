class CreateProducts < ActiveRecord::Migration
  def self.up
    create_table :products do |t|
      t.string :name

      t.timestamps
    end
    Product.create :name => "PCI"
    Product.create :name => "DCI"
    Product.create :name => "FCI"
    Product.create :name => "OCI"
    Product.create :name => "FFP"
  end

  def self.down
    drop_table :products
  end
end
