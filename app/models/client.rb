class Client < ApplicationRecord
    has_secure_password
    has_many :journals
    has_many :casenotes
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, uniqueness: true, presence: true
    validates :condition, presence: true
end
