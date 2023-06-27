var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function() {
  return gulp.src("./**/*.css")
  .pipe(autoprefixer({ browsers: ['IE 6','Chrome 9', 'Firefox 14']}))
  .pipe(gulp.dest("dest"));
});

gulp.task('default', () => {
	gulp.watch('./**/*.css', gulp.series('prefix'));
}	);