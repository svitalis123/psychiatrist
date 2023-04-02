class ClientsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]
    def create
        @client = Client.new(my_params)
        if @client.save
            render json: @client, status: :created
        else
            render json: @client.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def my_params
        params.permit(:firstname, :lastname, :condition, :age, :bio, :email)
    end
end
