class TypeController < ApplicationController
  before_action :generate_text
  def index; end

  def generate_text
    @text = 'this is the typing test right now, it is hard coded in the type controller'
  end
end
