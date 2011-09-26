# coding: utf-8
require 'spec_helper'

describe 'Category link' do
  describe 'access from top page' do
    before do
      visit '/'
      within(:css, '.navi') do
        click_link 'event'
      end
    end

    describe 'current path' do
      subject { current_path }
      it { should eq('/category/3/') }
    end
  end

  describe 'access category#event without "/" at the end of URL' do
    before do
      visit '/category/3'
    end

    it 'should show entries about sapporojs only' do
      find('title').should have_content('event - Sapporo.js')
      find('.entry').should have_content('Sapporo.js-2011.10.08 を開催します')
      find('.entry').should have_no_content('webサイト公開しました')
    end
  end
end
