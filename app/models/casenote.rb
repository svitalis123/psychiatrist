class Casenote < ApplicationRecord
    belongs_to :client
    belongs_to :therapist
    validates :content, presence: true
end
