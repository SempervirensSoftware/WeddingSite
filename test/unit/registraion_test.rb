# == Schema Information
#
# Table name: registraions
#
#  id          :integer          not null, primary key
#  isAttending :boolean
#  name        :string(255)
#  email       :string(255)
#  dinner      :string(255)
#  comments    :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class RegistraionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
