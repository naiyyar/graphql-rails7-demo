class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates_uniqueness_of :email
end
