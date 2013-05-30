class RenameRegistrations < ActiveRecord::Migration
  def change
  	rename_table :registraions, :registrations
  end
end
