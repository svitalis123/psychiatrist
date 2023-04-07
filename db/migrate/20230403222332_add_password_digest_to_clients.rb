class AddPasswordDigestToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :password_digest, :string
  end
end
