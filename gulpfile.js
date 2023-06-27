var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function() {
  return gulp.src("./src_css/*.css")
  .pipe(autoprefixer({ browsers: ['IE 6','Chrome 9', 'Firefox 14']}))
  .pipe(gulp.dest("dest_css"));
});

gulp.task('default', () => {
	gulp.watch('./src_css/*.css', gulp.series('prefix'));
}	);