class Employee < ApplicationRecord
  belongs_to :department
  has_many :bills, dependent: :destroy
  
  def full_name
    "#{first_name} #{last_name}"
  end
end
