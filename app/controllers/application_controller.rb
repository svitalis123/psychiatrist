class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    def encode_token(payload)
        JWT.encode(payload, 'my_secret')
      end
    
      def auth_header
        request.headers['Authorization']
      end
    
      def decoded_token
        return unless auth_header
    
        token = auth_header.split[1]
        begin
          JWT.decode(token, 'my_secret', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          []
        end
      end
    
      def session_user
        decoded_hash = decoded_token
        return if decoded_hash.nil?
    
        client_id = decoded_hash[0]['client_id']
        @client = Client.find_by(id: client_id)
      end
    
      def current_user
        session_user[:client_id]
      end
    
      def logged_in?
        !!session_user
      end
    
      def require_login
        render json: { message: 'Please Login' }, status: :unauthorized unless logged_in?
      end
end
