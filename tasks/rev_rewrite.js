const gulp = require('gulp')
const revRewrite = require('gulp-rev-rewrite');
const { paths } = require('./config')

// htmlファイルの各URLをhashつきに置き換える
function change_hash_of_html_link () {

  const manifest = gulp.src(`${paths.manifest.dest}rev-manifest.json`)

  return gulp.src(`${paths.manifest.dest}**/*.{html,css,js}`)
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest(paths.manifest.dest))
}

module.exports = change_hash_of_html_link

