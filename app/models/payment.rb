class Payment < ApplicationRecord
    belongs_to :therapist
    validates :amount, numericality: true
end
