var gulp = require('gulp');
	sass = require('gulp-sass');
	browserSync =require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch',['browserSync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
	});
});