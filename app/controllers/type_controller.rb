class TypeController < ApplicationController
  before_action :generate_text
  def index; end

  def generate_text
    @text = 'typing test'
  end
end
