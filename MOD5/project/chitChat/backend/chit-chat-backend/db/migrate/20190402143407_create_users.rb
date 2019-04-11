class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :native_language
      t.string :desired_language

      t.timestamps
    end
  end
end
