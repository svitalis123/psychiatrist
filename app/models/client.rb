class Client < ApplicationRecord
    has_many :journals
    has_many :casenotes
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, confirmation: true
    validates :age, numericality: {only_integer: true}
    validates :condition, presence: true
end
