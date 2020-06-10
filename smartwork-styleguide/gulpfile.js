const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile sass into CSS and auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

// Static Server and watching scss/html files
gulp.task('serve', gulp.series('sass', function() {
	browserSync.init({
		server: './'
	});

	gulp.watch('scss/*.scss', gulp.series('sass'));
	gulp.watch('*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));