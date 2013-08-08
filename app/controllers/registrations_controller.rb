class RegistrationsController < ApplicationController
	before_filter :basic_auth, :only => :index

	GENERIC_ERROR = {"error"=> 1, "message"=> "Error processing the registration"}

	def create
		response = GENERIC_ERROR

		registration = Registration.new(params[:registration])
		if (registration.save)
			response = {"error" => 0, "id" => registration.id, "name" => registration.name}
		end

		render :json => response
	end

	def index
		@registrations = Registration.all
		@attending = @registrations.select{ |reg| reg.isAttending == true }
		@not_attending = @registrations.select{ |reg| reg.isAttending == false }
	end

end