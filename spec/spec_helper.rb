require 'capybara/rspec'
require 'capybara-webkit'

RSpec.configuration.include Capybara::DSL

Capybara.current_driver = :webkit
Capybara.app_host = ENV['APP_HOST'] || 'http://localhost:3000'
