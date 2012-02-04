desc "Build generation required files."
task :default => 'css'

directory 'css'
desc "Generate css from sass"
file 'css' => [
  'css/sunlight.css',
]

# 対象の css/*.css ファイルは _sass/*.sass から生成します
rule '.css' => [
  proc {|name| name.sub(/^css/, '_sass').sub(/\.css/, '.sass')}
] do |t|
  sh 'sass', t.source, t.name
end
