require 'capybara/rspec'
require 'capybara/poltergeist'

RSpec.configuration.include Capybara::DSL

Capybara.configure do |config|
  config.default_driver = :poltergeist
  config.app_host = ENV['APP_HOST'] || 'http://localhost:3000'
end
