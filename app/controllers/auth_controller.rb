class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token
    def login
      @client = Client.find_by(email: params[:email])
      @therapist = Therapist.find_by(email: params[:email])
      if @client&.authenticate(params[:password])
        payload = { client_id: @client.id }
        token = encode_token(payload)
        render json: { client: @client, jwt: token, success: "Welcome back, #{@client.email}" }
      elsif @therapist&.authenticate(params[:password])
        payload = { therapist_id: @therapist.id }
        token = encode_token(payload)
        render json: { user: @therapist, jwt: token, success: "Welcome back, #{@therapist.email}" }
      else
        render json: { failure: 'Log in failed! Username or password invalid!' }
      end
    end
    
      
      # def user_is_authed
      #   @reserve = Reservation.find_by(client_id: current_user)
      #   render json: { message: 'You are authorized', data: @reserve }
      # end
end
