const gulp = require('gulp')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('./tsconfig.json')

const compile = function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('js'))
}

gulp.task('scripts', compile)

gulp.task(
  'watch',
  gulp.series('scripts', function watch() {
    gulp.watch(['src/**.ts', 'test/**.ts'], compile)
  })
)
