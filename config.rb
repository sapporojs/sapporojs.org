activate :directory_indexes

set :css_dir,    'css'
set :js_dir,     'js'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :blog do |blog|
  blog.prefix = 'news'
end

page '/rss.xml', layout: false

data.tags.each do |tag|
  proxy "/tag/#{tag}", 'tag.html', locals: {tag: tag}
end
