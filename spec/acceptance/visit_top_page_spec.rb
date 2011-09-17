require 'spec_helper'

describe 'Visit to top page' do
  before do
    visit '/'
  end

  describe '#header' do
    it 'should contain site info'do
      find('#header .siteName').should have_content('Sapporo.js')
      find('#header .description').should have_content('We like JavaScript.')
    end
  end
end
