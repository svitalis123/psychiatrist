class ClientsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]
   

    def show
        client = Client.all
        respond_to do |format|
         format.json { render json: client }
         format.pdf do
         pdf = Prawn::Document.new
         pdf.text client.to_json
         send_data pdf.render, filename: 'client.pdf', type: 'application/pdf', disposition: 'inline'
         end
        end
    end
    
    def create
        @client = Client.create(my_params)
        if @client.valid?
            payload = { client_id: @client.id }
            token = encode_token(payload)
            render json: { client: @client, jwt: token }
        else
            render json: @client.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def my_params
        params.permit(:firstname, :lastname, :password, :condition, :age, :email)
    end
end
