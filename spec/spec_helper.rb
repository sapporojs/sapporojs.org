require 'capybara/rspec'
require 'capybara-webkit'

RSpec.configuration.include Capybara::DSL

Capybara.configure do |config|
  config.default_driver = :webkit
  config.app_host = ENV['APP_HOST'] || 'http://localhost:3000'
end
