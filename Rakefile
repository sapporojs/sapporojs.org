MASTER_REPOSITORY = if ENV['GH_TOKEN']
    "https://#{ENV['GH_TOKEN']}@github.com/sapporojs/sapporojs.org"
  else
    'git@github.com:sapporojs/sapporojs.org.git'
  end
PUBLISH_BRANCH = 'gh-pages'

def initialize_repository(repository, branch)
  require 'fileutils'

  if Dir['build/.git'].empty?
    FileUtils.rm_rf 'build'
    sh "git clone #{repository} build"
  end

  Dir.chdir 'build' do
    sh "git checkout --orphan #{branch}"
  end
end

def update_repository(branch)
  Dir.chdir 'build' do
    sh 'git fetch origin'
    sh "git reset --hard origin/#{branch}"
  end
end

def build
  sh 'bundle exec middleman build'
end

def clean
  require 'fileutils'

  Dir['build/*'].each do |file|
    FileUtils.rm_rf file
  end
end

def push_to_gh_pages(repository, branch)
  sha1, _ = `git log -n 1 --oneline`.strip.split(' ')

  Dir.chdir 'build' do
    sh 'git add -A'
    sh "git commit -m 'Update with #{sha1}'"
    sh "git push #{repository} #{branch}"
  end
end

desc 'Clean built files'
task :clean do
  clean
end

desc 'Build sites'
task :build do
  build
end

desc 'Publish website'
task :publish do
  initialize_repository MASTER_REPOSITORY, PUBLISH_BRANCH
  update_repository PUBLISH_BRANCH
  clean
  build
  push_to_gh_pages MASTER_REPOSITORY, PUBLISH_BRANCH
end
