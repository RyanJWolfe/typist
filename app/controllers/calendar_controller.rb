class CalendarController < ApplicationController
  def index; end

  def week
    render partial: 'calendar/week'
  end

  def month
    render partial: 'calendar/month'
  end

  def day
    render partial: 'calendar/day'
  end
end
