# frozen_string_literal: true


# Component for rendering content as a modal
class TurboModalComponent < ViewComponent::Base
  include Turbo::FramesHelper

  def initialize(title:)
    @title = title
  end
end
