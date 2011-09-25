# coding: utf-8
require 'spec_helper'
require 'ostruct'

describe 'Visit to entry page' do
  describe 'access from top page' do
    before do
      visit '/'
      last_entry_path = Dir['data/entry/*.json'].sort.last
      entry_hash = JSON.parse(File.read(last_entry_path))
      @entry = OpenStruct.new(entry_hash)
      click_link @entry.title
    end

    describe 'current path' do
      subject { current_path }
      it { should eq("/entry/#{@entry.id}/") }
    end
  end

  shared_examples_for 'entry#4 page' do
    subject { find('.textBody') }
    it { should have_content('Sapporo.js-2011.10.08 を開催します') }
  end

  describe 'access to entry#4' do
    before do
      visit "/entry/4/"
    end

    it_should_behave_like 'entry#4 page'
  end

  describe 'access to entry#4 without "/" at the end of URL' do
    before do
      visit "/entry/4"
    end

    it_should_behave_like 'entry#4 page'
  end
end
