class TherapistsController < ApplicationController
  before_action :set_therapist, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: [:create]

  # POST /therapists or /therapists.json
  def create
    @therapist = Therapist.new(therapist_params)

      if @therapist.save
        payload={therapist_id: @therapist.id}
        token = encode_token(payload)
        render json: {client: @therapist, jwt:token, status: :created}
      else
        render json: @therapist.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /therapists/1 or /therapists/1.json
  # def update
  #   respond_to do |format|
  #     if @therapist.update(therapist_params)
  #       format.html { redirect_to therapist_url(@therapist), notice: "Therapist was successfully updated." }
  #       format.json { render :show, status: :ok, location: @therapist }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @therapist.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /therapists/1 or /therapists/1.json
  def destroy
    @therapist.destroy

    respond_to do |format|
      format.html { redirect_to therapists_url, notice: "Therapist was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_therapist
      @therapist = Therapist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def therapist_params
      params.permit(:firstname, :lastname, :email, :bio, :password)
    end
end
