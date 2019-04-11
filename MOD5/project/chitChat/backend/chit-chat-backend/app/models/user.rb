class User < ApplicationRecord
  # set_primary_key ""

  has_many :messages, foreign_key: :sender_id, class_name: "Message"
  has_many :received_messages, foreign_key: :receiver_id, class_name: "Message"
end

# has_many :item_categories
# has_many :categories, through: :item_categories
