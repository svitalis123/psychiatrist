class JournalsController < ApplicationController
  before_action :set_journal, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: [:create]
  # GET /journals or /journals.json

  def index
    @journals=Journal.find_by("client_id":1);
    render json: @journals, status: :created
  end
  # POST /journals or /journals.json
  def create
    @journal = Journal.new(journal_params)
    @journal.client_id = 1
      if @journal.save
        render json: @journal, status: :created
      else
        render json: @journal.errors, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /journals/1 or /journals/1.json
  # def update
  #   respond_to do |format|
  #     if @journal.update(journal_params)
  #       format.json { render @journal, status: :ok, location: @journal }
  #     else
  #       format.json { render json: @journal.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /journals/1 or /journals/1.json
  def destroy
    @journal.destroy

    respond_to do |format|
      format.html { redirect_to journals_url, notice: "Journal was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_journal
      @journal = Journal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def journal_params
      params.permit(:title, :content, :url)
    end
end
