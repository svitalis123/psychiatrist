class AddPasswordDigestToTherapists < ActiveRecord::Migration[7.0]
  def change
    add_column :therapists, :password_digest, :string
  end
end
