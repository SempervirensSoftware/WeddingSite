class StaticPagesController < ApplicationController
  
  def home
    detail = params[:detail]
    @detail = detail ? detail : "" 
  end

  
end
