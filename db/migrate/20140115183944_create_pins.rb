class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.text :description
      t.string :name, :null => false
      t.integer :hidden, :default => 0
      t.string :link
      t.string :image_url, :null => false
      t.integer :board_id, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
  end
end
