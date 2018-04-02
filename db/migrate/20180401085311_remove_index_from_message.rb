class RemoveIndexFromMessage < ActiveRecord::Migration[5.0]
  def change
    remove_index :messages, :user_id
  end
end
