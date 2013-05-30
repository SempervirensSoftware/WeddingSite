class CreateRegistraions < ActiveRecord::Migration
  def change
    create_table :registraions do |t|
      t.boolean	:isAttending
      t.string 	:name
      t.string 	:email
      t.string 	:dinner
      t.text   	:comments
      t.timestamps
    end
  end
end
