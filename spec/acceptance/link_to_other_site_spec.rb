require 'spec_helper'

describe 'Link to other site' do
  before do
    visit '/'
  end

  describe 'qwik' do
    it 'should have link to qwik' do
      page.should have_css('a[href="http://qwik.jp/sapporojs/"]', :text => 'qwik')
    end
  end

  describe 'github' do
    it 'should have link to github' do
      page.should have_css('a[href="https://github.com/tricknotes/sapporojs-web"]', :text => 'GitHub')
    end
  end
end
