class ResultController < ApplicationController
  def results
    @msg = params[:msg]
  end
end
