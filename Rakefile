desc 'Publish website'
task :publish do
  target = 'gh-pages'

  # XXX Use git repository if it already exist
  system 'rm -rf build'
  mkdir_p 'build'

  system "git clone git@github.com:sapporojs/sapporojs.org.git build"

  Dir.chdir 'build' do
    system "git checkout #{target}"
  end

  system 'bundle exec middleman build'

  Dir.chdir 'build' do
    system 'git add -A'
    system 'git commit -m "Update"' # TODO Modify message to use commit sha1
    system "git push origin #{target}"
  end
end
