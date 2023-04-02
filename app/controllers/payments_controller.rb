class PaymentsController < ApplicationController
  before_action :set_payment, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: [:create]

  # POST /payments or /payments.json
  def create
    @payment = Payment.new(payment_params)
    @payment.therapist_id = 1;
      if @payment.save
        render json: @payment, status: :created
      else
        render json: @payment.errors, status: :unprocessable_entity 
      end
  end



  # DELETE /payments/1 or /payments/1.json
  def destroy
    @payment.destroy

    respond_to do |format|
      format.html { redirect_to payments_url, notice: "Payment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def payment_params
      params.permit(:amount)
    end
end
