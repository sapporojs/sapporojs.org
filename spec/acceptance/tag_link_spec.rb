# coding: utf-8
require 'spec_helper'

describe 'Tag link' do
  describe 'access from top page' do
    before do
      visit '/'
      within(:css, '.others') do
        click_link 'sapporojs'
      end
    end

    describe 'current path' do
      subject { current_path }
      it { should eq('/tag/sapporojs/') }
    end
  end

  describe 'access tag#sapporojs without "/" at the end of URL' do
    before do
      visit '/tag/sapporojs'
    end

    it 'should show entries about sapporojs only' do
      find('title').should have_content('sapporojs - Sapporo.js')
      find('.entry').should have_content('Sapporo.js-2011.10.08 を開催します')
      find('.entry').should have_no_content('webサイト公開しました')
    end
  end
end
