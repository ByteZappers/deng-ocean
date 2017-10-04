var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var browserSync 	= require('browser-sync').create();
var concat 			= require('gulp-concat');// for bundling complied css/js

gulp.task('styles', function(){
 return gulp.src('./scss/*.scss')
   .pipe(sass())
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){

	browserSync.init({
		server:{
			baseDir: './'
		}
	});

	gulp.watch('./scss/*.scss', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);