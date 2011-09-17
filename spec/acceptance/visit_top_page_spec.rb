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

  describe '#main' do
    it 'should have entries' do
      page.should have_css('#main .entry')
    end
  end

  describe '#centent' do
    it 'should have link return to top' do
      find('#content .return a[href="#header"]').should have_content('Return to page top')
    end
  end

  describe '#footer' do
    it 'should have copyright' do
      find('#footer address').should have_content('Sapporo.js')
    end
  end
end
