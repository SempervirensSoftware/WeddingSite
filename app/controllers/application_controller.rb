class ApplicationController < ActionController::Base
  protect_from_forgery

  def basic_auth
	  authenticate_or_request_with_http_basic do |username, password|
	    username == "chowley" && password == "chowley20"
	  end 
  end

end
