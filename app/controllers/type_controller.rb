# frozen_string_literal: true

require 'faker'

class TypeController < ApplicationController
  before_action :generate_text
  def index; end

  def generate_text
    @text = Faker::TvShows::Seinfeld.quote
  end
end
