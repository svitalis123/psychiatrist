class Journal < ApplicationRecord
    belongs_to :client
    validates :title, presence: true
    validates :content, presence: true
    validates :url, presence: true
end
