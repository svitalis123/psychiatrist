class CasenotesController < ApplicationController
  before_action :set_casenote, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: [:create]
  
  # POST /casenotes or /casenotes.json
  def create
    @casenote = Casenote.new(casenote_params)
    @casenote.therapist_id = 1
    @casenote.client_id = 1
      if @casenote.save
        render json: @casenote, status: :created
      else
        render json: @casenote.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /casenotes/1 or /casenotes/1.json
  # def update
  #   respond_to do |format|
  #     if @casenote.update(casenote_params)
  #       format.html { redirect_to casenote_url(@casenote), notice: "Casenote was successfully updated." }
  #       format.json { render :show, status: :ok, location: @casenote }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @casenote.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /casenotes/1 or /casenotes/1.json
  def destroy
    @casenote.destroy

    respond_to do |format|
      format.html { redirect_to casenotes_url, notice: "Casenote was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_casenote
      @casenote = Casenote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def casenote_params
      params.permit(:content, :sessiondatetime)
    end
end
