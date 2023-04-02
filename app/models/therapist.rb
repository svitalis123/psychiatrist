class Therapist < ApplicationRecord
    has_many :payments
    has_many :casenotes
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, confirmation: true, presence: true
    validates :bio, presence: true
end
